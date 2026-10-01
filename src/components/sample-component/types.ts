import type { TSpacingKey } from "../../tokens/spacing";
import type { IStyleable } from "../types.ts";

export type TSampleComponentVariant = "primary" | "secondary";
export interface ISampleComponentProps extends IStyleable {
  variant?: TSampleComponentVariant;
  spacing?: TSpacingKey;
}
