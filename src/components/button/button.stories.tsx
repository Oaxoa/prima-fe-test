import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button.tsx";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const baseArgs = { text: "Click me" };
const badgeArgs = { badgeLabel: "Badge", badgeVariant: "negative" };

export const Pill: Story = {
  args: {
    ...baseArgs,
  },
};

export const PillBadge: Story = {
  args: {
    ...baseArgs,
    ...badgeArgs,
  },
};

export const PillSelected: Story = {
  args: {
    ...baseArgs,
    selected: true,
  },
};

export const PillBadgeSelected: Story = {
  args: {
    ...baseArgs,
    selected: true,
    ...badgeArgs,
  },
};

export const Underline: Story = {
  args: {
    ...baseArgs,
    variant: "underline",
  },
};

export const UnderlineBadge: Story = {
  args: {
    ...baseArgs,
    variant: "underline",
    ...badgeArgs,
  },
};

export const UnderlineSelected: Story = {
  args: {
    ...baseArgs,
    variant: "underline",
    selected: true,
  },
};

export const UnderlineBadgeSelected: Story = {
  args: {
    ...baseArgs,
    variant: "underline",
    selected: true,
    ...badgeArgs,
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
