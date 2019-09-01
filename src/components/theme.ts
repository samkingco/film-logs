const breakpoints = ["32em", "56em", "64em"];
const space = [0, 4, 8, 16, 24, 32, 64];

const sansStack =
  'system, -apple-system, "Helvetica Neue", Helvetica, "Segoe UI", "Roboto", sans-serif';

const fonts = {
  text: `"Text", ${sansStack}`,
  textAlt: `"TextAlt", ${sansStack}`,
  icon: '"Material Icons Sharp", "Material Icons"',
  mono: '"SF Mono", Menlo, monospace'
};

const fontSizes = [14, 16, 20, "8vw"];
const fontWeights = ["normal", "bold"];
const lineHeights = ["1", "1.2em", "1.4em", "1.6em"];

const letterSpacings = {
  none: "0",
  normal: "0.05em",
  wide: "0.25em"
};

const baseColors = {
  black: "#000000",
  blackAlt: "#141414",
  white: "#ffffff",
  whiteAlt: "#EBEBEB",
  grey: "#808080",
  greyOnBlack: "#A3A3A3",
  greyOnWhite: "#5C5C5C",
  red: "#FF4747",
  redAlt: "#E03F3F"
};

export interface ThemeColorMode {
  bg: string;
  bgAlt: string;
  text: string;
  textAlt: string;
  accent: string;
  accentAlt: string;
  selectionBg: string;
  selectionFg: string;
  inputBorder: string;
}

export type ThemeColorModeName = "light" | "dark";

export type ThemeColorModes = {
  [key in ThemeColorModeName]: ThemeColorMode;
};

export const modes: ThemeColorModes = {
  light: {
    bg: baseColors.white,
    bgAlt: baseColors.whiteAlt,
    text: baseColors.black,
    textAlt: baseColors.greyOnWhite,
    accent: baseColors.red,
    accentAlt: baseColors.redAlt,
    selectionBg: baseColors.red,
    selectionFg: baseColors.black,
    inputBorder: baseColors.grey
  },
  dark: {
    bg: baseColors.black,
    bgAlt: baseColors.blackAlt,
    text: baseColors.white,
    textAlt: baseColors.greyOnBlack,
    accent: baseColors.red,
    accentAlt: baseColors.redAlt,
    selectionBg: baseColors.red,
    selectionFg: baseColors.white,
    inputBorder: baseColors.grey
  }
};

export const theme = {
  breakpoints,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors: {
    ...modes.dark,
    modes
  }
};

export type Theme = typeof theme;
