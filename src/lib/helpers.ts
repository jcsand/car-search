import { Theme } from "@emotion/react";
import { rgba } from "emotion-rgba";

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
