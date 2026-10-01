/**
 * Typography tokens.
 *
 * Inter is self-hosted via @fontsource-variable/inter (imported in the app
 * entry and in .storybook/preview.tsx). Fontsource registers the variable
 * font under the family name 'Inter Variable' — plain 'Inter' is kept next to
 * it so a locally installed copy is still picked up, and the system stack
 * covers the swap period.
 */
export const typography = {
	fontFamily: {
		base: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
	},
} as const;

export type TFontFamilyKey = keyof typeof typography.fontFamily;
