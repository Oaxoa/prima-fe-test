import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { Placeholder } from "./placeholder.tsx";

const meta: Meta<typeof Placeholder> = {
  title: "Placeholder",
  component: Placeholder,
};

export default meta;

type Story = StoryObj<typeof Placeholder>;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.s};
`;

const TemplateList = () => (
  <ListWrapper>
    {Array.from({ length: 6 }, (_, i) => (
      <Placeholder key={i} height="107px" />
    ))}
  </ListWrapper>
);

const TemplateGrid = () => (
  <GridWrapper>
    {Array.from({ length: 6 }, (_, i) => (
      <Placeholder key={i} aspectRatio="1" />
    ))}
  </GridWrapper>
);

export const Base: Story = {};
export const List: Story = { render: TemplateList };
export const Grid: Story = { render: TemplateGrid };
