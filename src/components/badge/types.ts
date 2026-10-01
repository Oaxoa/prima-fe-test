import type { IStyleable } from "../types.ts";

export type TBadgeVariant = "neutral" | "positive" | "negative";
export interface IBadgeProps extends IStyleable {
  variant?: TBadgeVariant;
  label: string;
}
