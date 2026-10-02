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

// some sample content
const panels = {
  emails: (
    <ListWrapper>
      {Array.from({ length: 6 }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Sample content for Storybook story
        <Placeholder key={i} height="107px" />
      ))}
    </ListWrapper>
  ),
  files: (
    <GridWrapper>
      {Array.from({ length: 12 }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Sample content for Storybook story
        <Placeholder key={i} aspectRatio="1" />
      ))}
    </GridWrapper>
  ),
  edits: (
    <ListWrapper>
      {Array.from({ length: 3 }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Sample content for Storybook story
        <Placeholder key={i} height="60px" />
      ))}
    </ListWrapper>
  ),
  downloads: (
    <GridWrapper>
      {Array.from({ length: 12 }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Sample content for Storybook story
        <Placeholder key={i} aspectRatio="2" />
      ))}
    </GridWrapper>
  ),
  documents: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet lorem orci, ac
        facilisis velit lobortis quis. Suspendisse eleifend scelerisque dapibus. Sed malesuada
        sapien ac lorem malesuada, vitae euismod lacus ultrices. Aliquam lorem dolor, viverra at
        nisi at, varius euismod enim. Vestibulum et imperdiet augue, id sodales lectus. Duis id
        felis libero. Proin eleifend, velit eget rutrum interdum, arcu massa congue diam, ac
        vulputate justo arcu in nunc. Vivamus id malesuada enim, id ornare nisi.
      </p>

      <p>
        Quisque tincidunt ipsum ac eleifend consequat. Aliquam posuere, eros at tempus posuere, eros
        ipsum lobortis massa, vel feugiat enim nunc eget lorem. Integer magna sem, placerat at ex
        eu, pharetra blandit odio. In dignissim tortor mauris, pharetra fermentum elit porta ac.
        Proin feugiat lorem sit amet mauris tempus, vitae vehicula magna volutpat. In dapibus ex
        nibh. Pellentesque id nibh consequat augue vehicula scelerisque vitae sed magna. Duis vitae
        bibendum metus.
      </p>
    </div>
  ),
};

const Template = () => (
  <Tabs defaultValue="one">
    <Tabs.List aria-label="Account sections">
      <Tabs.Tab value="emails">Emails</Tabs.Tab>
      <Tabs.Tab value="files">Files</Tabs.Tab>
      <Tabs.Tab value="edits">Edits</Tabs.Tab>
      <Tabs.Tab value="downloads">Downloads</Tabs.Tab>
      <Tabs.Tab value="documents">Documents</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="emails">{panels.emails}</Tabs.Panel>
    <Tabs.Panel value="files">{panels.files}</Tabs.Panel>
    <Tabs.Panel value="edits">{panels.edits}</Tabs.Panel>
    <Tabs.Panel value="downloads">{panels.downloads}</Tabs.Panel>
    <Tabs.Panel value="documents">{panels.documents}</Tabs.Panel>
  </Tabs>
);

export const Pill: Story = {
  render: Template,
};
