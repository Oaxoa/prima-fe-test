import styled from "styled-components";
import type { TButtonVariant } from "../button/types.ts";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.m};
`;

export const StyledList = styled.div<{ $variant: TButtonVariant }>`
  display: flex;
  gap: ${({ theme, $variant }) => ($variant === "underline" ? theme.spacing.l : theme.spacing.xs2)};
`;
