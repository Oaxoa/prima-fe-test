import { createGlobalStyle } from 'styled-components';

/**
 * Applies the design system's base font to everything.
 *
 * Render it once, inside the ThemeProvider, above the rest of the tree.
 */
export const GlobalStyle = createGlobalStyle`
	html {
		font-family: ${({ theme }) => theme.typography.fontFamily.base};
		/* Inter ships an optical-size axis; let the browser track font-size. */
		font-optical-sizing: auto;
		/* Inter has real weights and italics — never synthesise them. */
		font-synthesis: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body {
		font-family: inherit;
	}

	/* Form controls don't inherit the document font by default. */
	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
	}
`;
