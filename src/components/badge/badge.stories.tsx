import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

const baseArgs = { label: "Some label" };

export const Neutral: Story = {
  args: {
    ...baseArgs,
  },
};

export const Positive: Story = {
  args: {
    ...baseArgs,
    variant: "positive",
  },
};

export const Negative: Story = {
  args: {
    ...baseArgs,
    variant: "negative",
  },
};

export const HtmlAttributes: Story = {
  args: {
    ...baseArgs,
    title: "Some title",
  },
};
