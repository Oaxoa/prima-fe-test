import styled, { css, type RuleSet } from "styled-components";

import { Badge } from "../badge";

import type { TButtonVariant } from "./types";

const cssCustomPropsBase = css``;

const cssCustomPropsVariant: Record<TButtonVariant, RuleSet<object>> = {
  pill: css`
    --bg-neutral: ${({ theme }) => theme.color.surface.default};
    --bg-hover: ${({ theme }) => theme.color.surface.hover};
    --bg-active: ${({ theme }) => theme.color.surface.active};
    --text-neutral: ${({ theme }) => theme.color.on.neutral};
    --text-hover: ${({ theme }) => theme.color.on.neutral};
    --text-active: ${({ theme }) => theme.color.on.neutral};
    --border-neutral: ${({ theme }) => theme.color.outline.default};
    --border-hover: ${({ theme }) => theme.color.outline.hover};
    --border-active: ${({ theme }) => theme.color.outline.default};
  `,
  underline: css`
    --bg-neutral: ${({ theme }) => theme.color.surface.default};
    --bg-hover: ${({ theme }) => theme.color.surface.default};
    --bg-active: ${({ theme }) => theme.color.surface.default};
    --text-neutral: ${({ theme }) => theme.color.on.neutral};
    --text-hover: ${({ theme }) => theme.color.on.neutral};
    --text-active: ${({ theme }) => theme.color.on.neutral};
    --border-neutral: ${({ theme }) => theme.color.outline.default};
    --border-hover: ${({ theme }) => theme.color.outline.hover};
    --border-active: ${({ theme }) => theme.color.outline.default};
  `,
};

export const Underline = styled.div`
  background-color: ${({ theme }) => theme.color.inverse.default};
  position: absolute;
  inset-block-end: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 3px;
  border-radius: 100px; // TODO weird value (from the design system). Check with the design team
`;

const variants: Record<TButtonVariant, RuleSet<object>> = {
  pill: css`
    border-radius: 2rem;
    border-width: 0.125rem;
    border-style: solid;
    padding: 0 ${({ theme }) => theme.spacing.xs};
  `,
  underline: css`
    border: none;
    padding: 0;
    border-radius: ${({ theme }) => theme.spacing.xs4};

    ${Underline} {
      background-color: ${({ theme }) => theme.color.surface.default};
    }
    
    &:hover {
      ${Underline} {
        background-color: ${({ theme }) => theme.color.outline.hover};
      }
    }
  `,
};

export const StyledBadge = styled(Badge)``;

export const Wrapper = styled.button<{
  $variant: TButtonVariant;
}>`
  user-select: none;
  box-sizing: border-box;
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  ${cssCustomPropsBase};

  // variant based state colors
  ${({ $variant }) => cssCustomPropsVariant[$variant]};

  background-color: var(--bg-neutral);
  color: var(--text-neutral);
  border-color: var(--border-neutral);
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  &:hover {
    background-color: var(--bg-hover);
    color: var(--text-hover);
    border-color: var(--border-hover);
  }

  &:active {
    background-color: var(--bg-active);
    color: var(--text-active);
    border-color: var(--border-active);
  }

  &:disabled {
    background-color: var(--bg-disabled);
    color: var(--text-disabled);
    border-color: var(--border-disabled);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline-width: 2px;
    outline-style: solid;
    outline-offset: 2px;
    outline-color: ${({ theme }) => theme.color.inverse.default};
  }

  ${StyledBadge} {
    position: absolute;
    inset-block-start: -0.875rem;
    inset-inline-end: 0;
  }

  // responsive height
  height: 42px;

  ${({ theme }) => theme.desktop} {
    height: 50px;
  }

  // visual style variants
  ${({ $variant }) => variants[$variant]};

  
`;

export const Text = styled.span`
`;
