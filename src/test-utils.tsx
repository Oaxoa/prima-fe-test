import { type RenderOptions, render } from "@testing-library/react";
import type React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

/** RTL's render, wrapped in the providers every component needs. */
export const renderWithTheme = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    ...options,
  });
