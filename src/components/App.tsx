import React from "react";
import { ThemeProvider } from "@emotion/react";

import { Header } from "@components/Header";
import { Hero } from "@components/Hero";

import "../assets/reset.css";
import "../assets/base.css";

const theme = {
  colors: {
    foreground: "#fff",
    background: "#1879ca"
  }
};

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Hero />
  </ThemeProvider>
);
