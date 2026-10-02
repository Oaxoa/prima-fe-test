import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button.tsx";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const baseArgs = { text: "Click me" };

export const Pill: Story = {
  args: {
    ...baseArgs,
  },
};

export const Underline: Story = {
  args: {
    ...baseArgs,
    variant: "underline",
  },
};

export const HtmlAttributes: Story = {
  args: {
    ...baseArgs,
    title: "Some title",
    "aria-label": "Some aria label",
    onClick: () => alert("Button clicked!"),
  },
};
