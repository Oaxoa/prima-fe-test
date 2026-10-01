import styled from "styled-components";

import type { TBadgeVariant } from "./types";

const variantsMap: Record<TBadgeVariant, string> = {
  neutral: "high",
  positive: "positive",
  negative: "negative",
};

export const Wrapper = styled.div<{ $variant: TBadgeVariant }>`
  border-radius: 12px;
  font-weight: bold;
	font-size: ${({ theme }) => theme.typography.size.body.s};
	background-color: ${({ theme, $variant }) => theme.color.surface[variantsMap[$variant]]};
  padding: ${({ theme }) => theme.spacing.xs4} ${({ theme }) => theme.spacing.xs3};

	${({ theme }) => theme.desktop} {
		padding: ${({ theme }) => theme.spacing.xs3} ${({ theme }) => theme.spacing.xs2};
	}
`;
