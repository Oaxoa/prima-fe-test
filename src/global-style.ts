import { createGlobalStyle } from "styled-components";

/**
 * Applies the design system's base font to everything.
 *
 * Render it once, inside the ThemeProvider, above the rest of the tree.
 */
export const GlobalStyle = createGlobalStyle`
	html {
		font-family: ${({ theme }) => theme.typography.fontFamily.base};
		line-height: 150%;
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

	/* Tabs panel swap, driven by React <ViewTransition> (see components/tabs):
	   old content drops down, then new content rises up. */
	::view-transition-old(.tab-exit) {
		animation: 150ms ease-in both tab-out-down;
	}
	::view-transition-new(.tab-enter) {
		animation: 150ms ease-out 150ms both tab-in-up;
	}

	@keyframes tab-out-down {
		to { opacity: 0; transform: translateY(16px); }
	}
	@keyframes tab-in-up {
		from { opacity: 0; transform: translateY(16px); }
	}

	@media (prefers-reduced-motion: reduce) {
		::view-transition-group(*),
		::view-transition-old(*),
		::view-transition-new(*) {
			animation: none !important;
		}
	}
`;
