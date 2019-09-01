import React from "react";
import { Global, css } from "@emotion/core";
import { useActiveThemeContext } from "./index";

export function GlobalStyle() {
  const { theme } = useActiveThemeContext();

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
          background-color: ${theme.colors.bg};
          color: ${theme.colors.text};
        }

        ::selection {
          background-color: ${theme.colors.selectionBg};
          color: ${theme.colors.selectionFg};
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
}
