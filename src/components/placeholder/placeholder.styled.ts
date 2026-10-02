import styled from "styled-components";

export const Wrapper = styled.div<{ $height?: string; $aspectRatio?: string }>`
  width: 100%;
	border-radius: ${({ theme }) => theme.spacing.l};
	background: ${({ theme }) => theme.color.surface.placeholder};
  min-height: ${({ theme }) => theme.spacing.l}; /* never collapses to invisible */
  height: ${({ $height }) => $height ?? "auto"};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio ?? "auto"};
`;
