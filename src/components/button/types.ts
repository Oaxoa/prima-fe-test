import type { TBadgeVariant } from "../badge/types.ts";
import type { IStyleable } from "../types.ts";

export type TButtonVariant = "pill" | "underline";
export type TButtonSelection = "unselected" | "selected";

export interface IButtonProps extends IStyleable {
  variant?: TButtonVariant;
  text: string;
  selected?: boolean;
  badgeLabel?: string;
  badgeVariant?: TBadgeVariant;
}
