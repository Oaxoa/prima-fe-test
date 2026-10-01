/**
 * Spacing tokens.
 *
 * Key names map to the design system labels, with the numeric prefix moved
 * to the end so every key is a valid identifier (dot-notation access):
 *
 *   0 → none   4XS → xs4   3XS → xs3   2XS → xs2   XS → xs
 *   S → s      M → m       L → l       XL → xl     2XL → xl2
 */
export const spacing = {
  none: "0",
  xs4: "2px",
  xs3: "4px",
  xs2: "8px",
  xs: "12px",
  s: "16px",
  m: "20px",
  l: "24px",
  xl: "32px",
  xl2: "48px",
} as const;

export type TSpacingKey = keyof typeof spacing;
