import type { IButtonProps, TButtonVariant } from "../button/types.ts";
import type { IStyleable } from "../types.ts";

export interface ITabProps
  extends IStyleable,
    Pick<IButtonProps, "badgeLabel" | "badgeVariant" | "badgeA11yLabel"> {
  value: string;
  children: string;
}

export interface ITabsProps {
  /** Visual style applied to every tab. */
  variant?: TButtonVariant;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

/** A tablist must have an accessible name: exactly one of these two. */
type TListLabel =
  | { "aria-label": string; "aria-labelledby"?: never }
  | { "aria-labelledby": string; "aria-label"?: never };

export type TListProps = Omit<React.ComponentProps<"div">, "aria-label" | "aria-labelledby"> &
  TListLabel;

export interface IPanelProps {
  value: string;
  children: React.ReactNode;
}

export type TabsContextValue = {
  value: string;
  select: (value: string) => void;
  baseId: string;
  variant: TButtonVariant;
};
