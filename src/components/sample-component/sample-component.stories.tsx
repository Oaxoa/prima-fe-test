import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

import { SampleComponent } from "./sample-component";
import type { ISampleComponentProps } from "./types";

const meta: Meta<typeof SampleComponent> = {
  title: "SampleComponent",
  component: SampleComponent,
};

export default meta;

type Story = StoryObj<typeof SampleComponent>;

const StyledSampleComponent = styled(SampleComponent)`
	border-style: dashed;
	border-width: 4px;
`;

const TemplateStyled = (args: ISampleComponentProps) => <StyledSampleComponent {...args} />;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const BigSpacing: Story = { args: { spacing: "xl2" } };

export const Styled: Story = {
  render: TemplateStyled,
};
