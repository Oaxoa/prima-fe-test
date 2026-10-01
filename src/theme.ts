import { spacing } from './tokens/spacing';
import { color } from './tokens/color';

export const theme = {
	spacing,
	color
} as const;

export type Theme = typeof theme;
