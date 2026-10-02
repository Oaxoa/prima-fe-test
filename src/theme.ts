import { color } from "./tokens/color";
import { easing } from "./tokens/easing";
import { spacing } from "./tokens/spacing";
import { typography } from "./tokens/typography";

const BREAKPOINT = 768;

export const theme = {
  spacing,
  color,
  typography,
  easing,
  desktop: `@media (width > ${BREAKPOINT}px)`,
} as const;

export type Theme = typeof theme;
