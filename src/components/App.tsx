import React from "react";
import { ThemeProvider } from "@emotion/react";

import { Header } from "@@components/Header";
import { Hero } from "@@components/Hero";
import { theme } from "@@lib/theme";

import "@@styles/reset.css";
import "@@styles/base.css";

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Hero />
  </ThemeProvider>
);
