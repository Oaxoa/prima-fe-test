import type { TBadgeVariant } from "../badge/types.ts";
import type { IStyleable } from "../types.ts";

export type TButtonVariant = "pill" | "underline";

export interface IButtonProps extends IStyleable {
  variant?: TButtonVariant;
  text: string;
  badgeLabel?: string;
  badgeVariant?: TBadgeVariant;
}
