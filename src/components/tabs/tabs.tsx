import { createContext, useContext, useId, useState } from "react";
import { Button } from "../button";
import { StyledList, Wrapper } from "./tabs.styled.ts";
import type { ITabProps, TabsContextValue } from "./types.ts";

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs parts must be rendered inside <Tabs>");
  return ctx;
};

type TTabsProps = {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
};

export const Tabs = ({ defaultValue = "", value, onChange, children }: TTabsProps) => {
  const baseId = useId();
  const [internal, setInternal] = useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  const select = (next: string) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <TabsContext.Provider value={{ value: current, select, baseId }}>
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

const Tab = ({ value, children, className }: ITabProps) => {
  const { value: current, select, baseId } = useTabs();
  const selected = current === value;

  return (
    <Button
      className={className}
      text={children}
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

type TPanelProps = {
  value: string;
  children: React.ReactNode;
};

const Panel = ({ value, children }: TPanelProps) => {
  const { value: current, baseId } = useTabs();
  if (current !== value) return null;

  return (
    <div role="tabpanel" id={`${baseId}-panel-${value}`} aria-labelledby={`${baseId}-tab-${value}`}>
      {children}
    </div>
  );
};

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
