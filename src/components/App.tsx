import React from "react";
import { ThemeProvider } from "@emotion/react";

import { Header } from "@components/Header";
import { SearchHero } from "@components/SearchHero";

import "../assets/reset.css";
import "../assets/base.css";

const theme = {
  colors: {
    foreground: "#fff",
    background: "#1879ca"
  }
};

export const App = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <Header />
    <SearchHero />
  </ThemeProvider>
);
