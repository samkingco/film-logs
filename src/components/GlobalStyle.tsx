import React from "react";
import { Global, css } from "@emotion/core";
import { useSelector } from "react-redux";
import { theme } from "./index";
import { AppState } from "../store";

export function GlobalStyle() {
  const themeMode = useSelector((s: AppState) => s.themeMode);

  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html {
          height: 100%;
        }

        body,
        #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
        }

        body {
          background-color: ${theme.colors.modes[themeMode].bg};
          color: ${theme.colors.modes[themeMode].text};
        }

        ::selection {
          background-color: ${theme.colors.modes[themeMode].selectionBg};
          color: ${theme.colors.modes[themeMode].selectionFg};
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
}
