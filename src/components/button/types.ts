import type { TBadgeVariant } from "../badge/types.ts";
import type { IStyleable } from "../types.ts";

export type TButtonVariant = "pill" | "underline";
export type TButtonSelection = "unselected" | "selected";

export interface IButtonProps extends IStyleable {
  variant?: TButtonVariant;
  text: string;
  /**
   * Visual selected state. On a plain button it is also exposed as
   * `aria-pressed` (toggle button); with a `role` (e.g. "tab") the caller
   * sets the matching ARIA attribute instead.
   */
  selected?: boolean;
  badgeLabel?: string;
  badgeVariant?: TBadgeVariant;
  /** Screen reader text for the badge, see Badge's `a11yLabel`. */
  badgeA11yLabel?: string;
}
