import React from "react";
import { Global, css } from "@emotion/core";

export function GlobalFonts() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Text";
          font-display: fallback;
          src: url("/fonts/Text.woff") format("woff"),
            url("/fonts/Text.woff2") format("woff2");
          font-style: normal;
          font-weight: normal;
        }

        @font-face {
          font-family: "Text";
          font-display: fallback;
          src: url("/fonts/TextBold.woff") format("woff"),
            url("/fonts/TextBold.woff2") format("woff2");
          font-style: normal;
          font-weight: bold;
        }

        @font-face {
          font-family: "TextAlt";
          font-display: fallback;
          src: url("/fonts/TextAlt.woff") format("woff"),
            url("/fonts/TextAlt.woff2") format("woff2");
          font-style: normal;
          font-weight: bold;
        }
      `}
    />
  );
}
