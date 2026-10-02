import {
  addTransitionType,
  createContext,
  startTransition,
  useContext,
  useId,
  useState,
  ViewTransition,
} from "react";
import { Button } from "../button";
import { StyledList, Wrapper } from "./tabs.styled.ts";
import type { IPanelProps, ITabProps, ITabsProps, TabsContextValue } from "./types.ts";

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs parts must be rendered inside <Tabs>");
  return ctx;
};

export const Tabs = ({
  variant = "pill",
  defaultValue = "",
  value,
  onChange,
  children,
}: ITabsProps) => {
  const baseId = useId();
  const [internal, setInternal] = useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  const select = (next: string) => {
    if (next === current) return;
    startTransition(() => {
      addTransitionType("tab-select");
      if (!isControlled) setInternal(next);
      onChange?.(next);
    });
  };

  return (
    <TabsContext.Provider value={{ value: current, select, baseId, variant }}>
      <Wrapper>{children}</Wrapper>
    </TabsContext.Provider>
  );
};

const List = ({ children, ...rest }: React.ComponentProps<"div">) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tabs = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)'),
    );
    const index = tabs.indexOf(document.activeElement as HTMLButtonElement);
    if (index === -1) return;

    let next: number;
    switch (e.key) {
      case "ArrowRight":
        next = (index + 1) % tabs.length;
        break;
      case "ArrowLeft":
        next = (index - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = tabs.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    tabs[next].focus();
  };

  return (
    <StyledList role="tablist" onKeyDown={onKeyDown} {...rest}>
      {children}
    </StyledList>
  );
};

/**
 * Tab API design notes: how the label and the badge get into a tab.
 *
 * Decision: the label is the child text, the badge is set via props.
 *
 *   <Tabs.Tab value="emails" badgeLabel="3">Emails</Tabs.Tab>
 *
 * Label options
 *
 * 1. Label as children (chosen)
 *    + Idiomatic for compound components: Radix UI (`Tabs.Trigger`),
 *      Headless UI (`Tab`), React Aria (`Tab`), Chakra UI (`Tab` / `Tabs.Trigger`)
 *      and Mantine (`Tabs.Tab`) all take the label as children.
 *    + Reads naturally in JSX, and leaves room to accept rich content later
 *      (icons, formatted text) by widening the type.
 *    - `children` usually means "any node", but here it is typed as `string`
 *      (it becomes Button's `text`), so the type is narrower than it looks.
 *    - Doesn't match Button, which takes its label as the `text` prop.
 *
 * 2. Label as a prop (`text` to match Button, or `label`)
 *    + Every piece of tab content is a prop, mirroring Button 1:1, and the
 *      string-only constraint is explicit.
 *    + MUI (`<Tab label="…" icon={…} />`) and Ant Design (`items={[{ key, label }]}`)
 *      take this approach.
 *    - Less common for compound tabs, and moving to rich content later would mean
 *      an API change. Rejected to keep the children convention.
 *
 * Badge options
 *
 * 1. Badge via props, `badgeLabel` / `badgeVariant` (chosen)
 *    + Same API as Button: Tab just forwards the props (typed with
 *      `Pick<IButtonProps, …>`, so they can't drift apart).
 *    + Button owns the badge's placement and its look.
 *    + Keeps the design system strict: only a real Badge, with an allowed
 *      variant, can appear.
 *    - Only covers the shapes Badge supports; custom content (a dot, an icon,
 *      a live counter with a tooltip) would need new props.
 *
 * 2. Badge as JSX (`<Badge />` in children, or a slot prop such as
 *    Mantine's `rightSection`, or a node inside MUI's `label`)
 *    + Most flexible: any node can be rendered.
 *    - A Badge passed in this way isn't Button's `StyledBadge`.
 *      Button would need a slot first, and Tab would
 *      forward it.
 *    - Children would have to become `ReactNode` and be split back into
 *      label + badge, and anyone could put any node in the corner.
 *    - Worth revisiting only if badges need custom content.
 */
const Tab = ({ value, children, className, badgeLabel, badgeVariant }: ITabProps) => {
  const { value: current, select, baseId, variant } = useTabs();
  const selected = current === value;

  return (
    <Button
      className={className}
      variant={variant}
      text={children}
      badgeLabel={badgeLabel}
      badgeVariant={badgeVariant}
      selected={selected}
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={selected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={selected ? 0 : -1}
      onClick={() => select(value)}
    />
  );
};

const Panel = ({ value, children }: IPanelProps) => {
  const { value: current, baseId } = useTabs();
  if (current !== value) return null;

  return (
    <ViewTransition
      enter={{ "tab-select": "tab-enter", default: "none" }}
      exit={{ "tab-select": "tab-exit", default: "none" }}
    >
      <div
        role="tabpanel"
        id={`${baseId}-panel-${value}`}
        aria-labelledby={`${baseId}-tab-${value}`}
      >
        {children}
      </div>
    </ViewTransition>
  );
};

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
