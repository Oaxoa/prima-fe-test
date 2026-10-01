import { color } from "./tokens/color";
import { spacing } from "./tokens/spacing";

const BREAKPOINT = 768;

export const theme = {
  spacing,
  color,
  desktop: `@media (width > ${BREAKPOINT}px)`,
} as const;

export type Theme = typeof theme;
