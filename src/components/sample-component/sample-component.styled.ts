import styled, {css, RuleSet} from 'styled-components';

import { TSpacingKey } from '../../tokens/spacing';
import { TSampleComponentVariant } from './types';

const variants:Record<TSampleComponentVariant, RuleSet>={
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
	${({$variant}) => variants[$variant]}
	
	border: 1px solid #ccc;
	color: ${({ theme }) => theme.color.text};
	padding: ${({ theme, $spacing }) => theme.spacing[$spacing]};
`;
