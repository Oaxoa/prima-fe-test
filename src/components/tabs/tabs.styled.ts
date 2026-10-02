import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.m};
`;

export const StyledList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs2};
`;
