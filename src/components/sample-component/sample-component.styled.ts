import styled, { css, RuleSet } from "styled-components";

import { TSpacingKey } from "../../tokens/spacing";
import { TSampleComponentVariant } from "./types";

const variants: Record<TSampleComponentVariant, RuleSet> = {
  primary: css`
		background-color: #fff;
		color: '#fff';
	`,
  secondary: css`
		background-color: #f99;
		color: '#fff';
	`,
};

export const Wrapper = styled.div<{ $variant: TSampleComponentVariant; $spacing: TSpacingKey }>`
	${({ $variant }) => variants[$variant]}
	
	border: 1px solid #ccc;
	color: ${({ theme }) => theme.color.text};
	padding: ${({ theme, $spacing }) => theme.spacing[$spacing]};
	position: relative;
	font-size: ${({ theme }) => theme.typography.size.body.m};
	
	&:after {
		color: #fff;
		position: absolute;
		top: 0; 
		right: 0;
		text-transform: uppercase;
		font-size: 10px;
		padding: 2px 4px;
		content: 'mobile';
		background: #19f;

		${({ theme }) => theme.desktop} {
			content: 'desktop';
			background: #f04;
		}
	}

	
`;
