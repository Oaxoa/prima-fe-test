import type { IButtonProps, TButtonVariant } from "../button/types.ts";
import type { IStyleable } from "../types.ts";

export interface ITabProps extends IStyleable, Pick<IButtonProps, "badgeLabel" | "badgeVariant"> {
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
