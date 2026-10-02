import styled, { css, type RuleSet } from "styled-components";

import { Badge } from "../badge";

import type { TButtonSelection, TButtonVariant } from "./types";

const cssCustomPropsColors: Record<TButtonVariant, Record<TButtonSelection, RuleSet<object>>> = {
  pill: {
    unselected: css`
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
    selected: css`
    --bg-neutral: ${({ theme }) => theme.color.inverse.default};
    --bg-hover: ${({ theme }) => theme.color.inverse.hover};
    --bg-active: ${({ theme }) => theme.color.inverse.active};
    --text-neutral: ${({ theme }) => theme.color.on.inverse};
    --text-hover: ${({ theme }) => theme.color.on.inverse};
    --text-active: ${({ theme }) => theme.color.on.inverse};
    --border-neutral: ${({ theme }) => theme.color.surface.default};
    --border-hover: ${({ theme }) => theme.color.surface.hover};
    --border-active: ${({ theme }) => theme.color.surface.default};
  `,
  },
  underline: {
    unselected: css`
    --bg-neutral: ${({ theme }) => theme.color.surface.default};
    --bg-hover: ${({ theme }) => theme.color.surface.default};
    --bg-active: ${({ theme }) => theme.color.surface.default};
    --text-neutral: ${({ theme }) => theme.color.on.neutral};
    --text-hover: ${({ theme }) => theme.color.on.neutral};
    --text-active: ${({ theme }) => theme.color.on.neutral};
    --border-neutral: ${({ theme }) => theme.color.surface.default};
    --border-hover: ${({ theme }) => theme.color.outline.hover};
    --border-active: ${({ theme }) => theme.color.outline.hover};`,
    selected: css`
    --bg-neutral: ${({ theme }) => theme.color.surface.default};
    --bg-hover: ${({ theme }) => theme.color.surface.default};
    --bg-active: ${({ theme }) => theme.color.surface.default};
    --text-neutral: ${({ theme }) => theme.color.on.neutral};
    --text-hover: ${({ theme }) => theme.color.on.neutral};
    --text-active: ${({ theme }) => theme.color.on.neutral};
    --border-neutral: ${({ theme }) => theme.color.inverse.default};
    --border-hover: ${({ theme }) => theme.color.inverse.default};
    --border-active: ${({ theme }) => theme.color.inverse.default};
  `,
  },
};

export const Content = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.xs2};
  align-items: center;
`;
export const Underline = styled.div`
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
    border-width: ${({ $selected }) => ($selected ? 0 : "0.125rem")};
    border-style: solid;
    padding: 0 ${({ theme }) => theme.spacing.xs};
  `,
  underline: css`
    border: none;
    padding: 0;
    border-radius: ${({ theme }) => theme.spacing.xs4};

    ${Underline} {
      background-color: var(--border-neutral);
    }
    
    &:hover {
      ${Underline} {
        background-color: var(--border-hover);
      }
    }
  `,
};

export const StyledBadge = styled(Badge)``;

export const Wrapper = styled.button<{
  $variant: TButtonVariant;
  $selected: boolean;
}>`
  user-select: none;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-weight: bold;

  // variant based state colors
  ${({ $variant, $selected }) => cssCustomPropsColors[$variant][$selected ? "selected" : "unselected"]};

  // application of css custom props
  background-color: var(--bg-neutral);
  color: var(--text-neutral);
  border-color: var(--border-neutral);
  width: auto;

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

  // focus ring: always present but transparent, so color/offset can transition
  outline: 2px solid transparent;
  outline-offset: 0;
  transition:
    background ${({ theme }) => theme.easing.slow},
    outline-color ${({ theme }) => theme.easing.default},
    outline-offset ${({ theme }) => theme.easing.default};

  &:focus-visible {
    outline-color: ${({ theme }) => theme.color.inverse.default};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  // responsive height
  height: 42px;

  ${({ theme }) => theme.desktop} {
    height: 50px;
  }

  // visual style variants
  ${({ $variant }) => variants[$variant]};
`;

export const Text = styled.span``;
