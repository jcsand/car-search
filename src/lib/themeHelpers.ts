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

export const t = {
  space: themeSpace,
  color: themeColor,
  font: themeFont
};

export const wrapThemeHelpers = (props: { theme: Theme }) => ({
  space: (size: keyof Theme["space"] = 1, half = false) =>
    themeSpace(size, half)(props),
  color: (name: keyof Theme["colors"], alpha = 1) =>
    themeColor(name, alpha)(props),
  font: (name: keyof Theme["fonts"]) => themeFont(name)(props)
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
