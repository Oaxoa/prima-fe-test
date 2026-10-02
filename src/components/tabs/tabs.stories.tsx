import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { Placeholder } from "../placeholder/placeholder.tsx";
import { Tabs } from "./tabs.tsx";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.s};
`;

const Template = () => (
  <Tabs defaultValue="one">
    <Tabs.List aria-label="Account sections">
      <Tabs.Tab value="emails">Emails</Tabs.Tab>
      <Tabs.Tab value="files">Files</Tabs.Tab>
      <Tabs.Tab value="edits">Edits</Tabs.Tab>
      <Tabs.Tab value="downloads">Downloads</Tabs.Tab>
      <Tabs.Tab value="documents">Documents</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="emails">
      <ListWrapper>
        {Array.from({ length: 6 }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Sample content for Storybook story
          <Placeholder key={i} height="107px" />
        ))}
      </ListWrapper>
    </Tabs.Panel>
    <Tabs.Panel value="files">
      <GridWrapper>
        {Array.from({ length: 12 }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Sample content for Storybook story
          <Placeholder key={i} aspectRatio="1" />
        ))}
      </GridWrapper>
    </Tabs.Panel>
    <Tabs.Panel value="edits">
      <ListWrapper>
        {Array.from({ length: 3 }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Sample content for Storybook story
          <Placeholder key={i} height="60px" />
        ))}
      </ListWrapper>
    </Tabs.Panel>
    <Tabs.Panel value="downloads">
      <GridWrapper>
        {Array.from({ length: 12 }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Sample content for Storybook story
          <Placeholder key={i} aspectRatio="2" />
        ))}
      </GridWrapper>
    </Tabs.Panel>
    <Tabs.Panel value="documents">
      <GridWrapper>
        {Array.from({ length: 3 }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Sample content for Storybook story
          <Placeholder key={i} aspectRatio="1" />
        ))}
      </GridWrapper>
    </Tabs.Panel>
  </Tabs>
);

export const Pill: Story = {
  render: Template,
};
