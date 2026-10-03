import styled from "styled-components";

import type { TSurfaceKey } from "../../tokens/color";
import type { TBadgeVariant } from "./types";

const variantsMap: Record<TBadgeVariant, TSurfaceKey> = {
  neutral: "high",
  positive: "positive",
  negative: "negative",
};

export const Wrapper = styled.span<{ $variant: TBadgeVariant }>`
	display: inline-block;
	width: fit-content;
  border-radius: 12px;
  font-weight: bold;
	font-size: ${({ theme }) => theme.typography.size.body.s};
	background-color: ${({ theme, $variant }) => theme.color.surface[variantsMap[$variant]]};
	color: ${({ theme }) => theme.color.on.neutral};
	
  padding: ${({ theme }) => theme.spacing.xs4} ${({ theme }) => theme.spacing.xs3};

	${({ theme }) => theme.desktop} {
		padding: ${({ theme }) => theme.spacing.xs3} ${({ theme }) => theme.spacing.xs2};
	}
`;

/** Hidden visually, still read by screen readers. */
export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
