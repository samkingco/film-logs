import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "emotion-theming";
import { theme, Theme, ThemeColorModeName } from "./index";
import { AppState } from "../store";

function getTheme(mode: ThemeColorModeName): Theme {
  const activeColors = theme.colors.modes[mode] || theme.colors;

  return {
    ...theme,
    colors: {
      ...theme.colors,
      ...activeColors
    }
  };
}

interface ActiveThemeProviderProps {
  children: React.ReactNode;
}

export function ActiveThemeProvider(props: ActiveThemeProviderProps) {
  const themeMode = useSelector((s: AppState) => s.themeMode);
  const activeTheme = getTheme(themeMode);

  console.log(themeMode);

  return <ThemeProvider theme={activeTheme} {...props} />;
}
