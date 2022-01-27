import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  type validFonts = "base" | "os";
  type validColors =
    | "black"
    | "foreground"
    | "background"
    | "lightBlack"
    | "lightBlue"
    | "lightGrey"
    | "lightOrange"
    | "green"
    | "grey"
    | "darkGreen"
    | "darkGrey";

  export interface Theme {
    space: number[];
    colors: Record<validColors, string>;
    fonts: Record<validFonts, string>;
  }
}

const OS_FONT_STACK = [
  "BlinkMacSystemFont",
  "-apple-system",
  '"Segoe UI"',
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif"
].join(", ");

export const breakpoints = [480, 576, 768, 1024];

export const theme: Theme = {
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 40, 44, 52, 64],
  colors: {
    foreground: "#fff",
    background: "#1879ca",
    lightBlack: "#1a1a1a",
    lightBlue: "#1273c4",
    lightGrey: "#e7e7e7",
    lightOrange: "#ffb700",
    black: "#000",
    green: "#068323",
    grey: "#949494",
    darkGreen: "#0d6521",
    darkGrey: "#474747"
  },
  fonts: {
    base: `"Avenir Next", ${OS_FONT_STACK}`,
    os: OS_FONT_STACK
  }
};
