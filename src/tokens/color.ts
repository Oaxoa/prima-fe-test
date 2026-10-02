/**
 * The naming of color tokens appears a bit peculiar, but it must be consistent
 * with the naming of the color tokens in the design system.
 */
export const color = {
  text: "#000",
  // button text
  on: {
    neutral: "#1B2134",
    inverse: "#FFFFFF",
  },
  surface: {
    default: "transparent",
    high: "#F1F1F7",
    positive: "#B1FFC7",
    negative: "#FFBFB1",
    hover: "#F6F6FA",
    active: "#F1F1F7",
    placeholder: "#CCCCCC",
  },
  outline: {
    default: "#D3D3DC",
    hover: "#C4C5CF",
  },
  inverse: {
    default: "#1B2134",
    hover: "#343A4E",
    active: "#585D71",
  },
} as const;

export type TColorKey = keyof typeof color;
export type TSurfaceKey = keyof typeof color.surface;
