import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import { theme } from "@@lib/theme";

export const renderWithTheme = (Component: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);
