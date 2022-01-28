import { css, Theme } from "@emotion/react";
import { rgba } from "emotion-rgba";
import facepaint, { Arg } from "facepaint";
import { breakpoints, Breakpoint } from "./theme";

export const themeSpace =
  (size: keyof Theme["space"] = 1, half = false) =>
  (props: { theme: Theme }) =>
    `${(props.theme.space[size] as number) / (half ? 2 : 1)}px`;

export const themeColor =
  (name: keyof Theme["colors"], alpha = 1) =>
  (props: { theme: Theme }) =>
    alpha !== 1
      ? rgba(`${props.theme.colors[name]}`, alpha)
      : `${props.theme.colors[name]}`;

export const themeFont =
  (name: keyof Theme["fonts"]) => (props: { theme: Theme }) =>
    `${props.theme.fonts[name]}`;

export const themeFontSize =
  (size: keyof Theme["fontSizes"] = 2) =>
  (props: { theme: Theme }) =>
    `${props.theme.fontSizes[size]}px`;

export const themeLineHeight =
  (size: keyof Theme["lineHeights"] = 2) =>
  (props: { theme: Theme }) =>
    `${props.theme.lineHeights[size]}px`;

export const t = {
  space: themeSpace,
  color: themeColor,
  font: themeFont,
  fontSize: themeFontSize,
  lineHeight: themeLineHeight
};

export const wrapThemeHelpers = (props: { theme: Theme }) => ({
  space: (size: keyof Theme["space"] = 1, half = false) =>
    t.space(size, half)(props),
  color: (name: keyof Theme["colors"], alpha = 1) =>
    t.color(name, alpha)(props),
  font: (name: keyof Theme["fonts"]) => t.font(name)(props),
  fontSize: (size: keyof Theme["fontSizes"] = 2) => t.fontSize(size)(props),
  lineHeight: (size: keyof Theme["lineHeights"] = 2) =>
    t.lineHeight(size)(props)
});

type WrappedThemeHelpers = ReturnType<typeof wrapThemeHelpers>;

export const facepaintFactory = (requestedBreakpoints: Breakpoint[]) =>
  facepaint(
    requestedBreakpoints.map(
      (key) => `@media(min-width: ${breakpoints[key]}px)`
    )
  );

export const mediaQuery = (requestedBreakpoints: Breakpoint[]) => {
  const mq = facepaintFactory(requestedBreakpoints);

  return (callbackOrArg: Arg | ((t: WrappedThemeHelpers) => Arg)) =>
    (props: { theme: Theme }) =>
      typeof callbackOrArg === "function"
        ? css(mq(callbackOrArg(wrapThemeHelpers(props))))
        : css(mq(callbackOrArg));
};
