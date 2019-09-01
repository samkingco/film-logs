import React, { useState, useContext } from "react";
import { ThemeProvider } from "emotion-theming";
import { theme, Theme, ThemeColorModeName } from "./index";

interface ActiveThemeContextValue {
  mode: ThemeColorModeName;
  modeNames: ThemeColorModeName[];
  theme: Theme;
  setTheme: (mode: ThemeColorModeName) => void;
}

const modeNames: ThemeColorModeName[] = ["light", "dark"];

const defaultActiveThemeContextValue: ActiveThemeContextValue = {
  mode: "dark",
  modeNames,
  theme,
  setTheme: () => {}
};

const ActiveThemeContext = React.createContext(defaultActiveThemeContextValue);
export const useActiveThemeContext = () => useContext(ActiveThemeContext);

function getTheme(
  mode: ThemeColorModeName,
  defaultMode: ThemeColorModeName
): Theme {
  const activeColors =
    theme.colors.modes[mode] || theme.colors.modes[defaultMode] || theme.colors;

  return {
    ...theme,
    colors: {
      ...theme.colors,
      ...activeColors
    }
  };
}

interface ActiveThemeProviderProps {
  defaultMode: ThemeColorModeName;
  children: React.ReactNode;
}

export function ActiveThemeProvider(props: ActiveThemeProviderProps) {
  const { defaultMode = "dark", children, ...otherProps } = props;
  const [mode, setMode] = useState(defaultMode);
  const activeTheme = getTheme(mode, defaultMode);

  const setTheme = (mode: ThemeColorModeName) => {
    setMode(modeNames.includes(mode) ? mode : defaultMode);
  };

  const value = {
    mode,
    modeNames,
    theme: activeTheme,
    setTheme
  };

  return (
    <ActiveThemeContext.Provider {...otherProps} value={value}>
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </ActiveThemeContext.Provider>
  );
}
