export const color = {
  text: "#000",
  surface: {
    high: "#F1F1F7",
    positive: "#B1FFC7",
    negative: "#FFBFB1",
  },
} as const;

export type TColorKey = keyof typeof color;
