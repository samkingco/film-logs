import { styled, css } from "./index";
import {
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
  BaseElementProps,
  TypographyProps
} from "./props";

type BaseProps = BaseElementProps | TypographyProps;

const BASE_TEXT_STYLE = css({
  m: 0,
  color: "text",
  letterSpacing: "normal",
  lineHeight: 1
});

export const Caption = styled("small")<BaseProps>(
  BASE_TEXT_STYLE,
  css({
    fontFamily: "text",
    fontWeight: "normal",
    fontSize: 0
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

Caption.displayName = "Caption";

export const Body = styled("p")<BaseProps>(
  BASE_TEXT_STYLE,
  css({
    fontFamily: "text",
    fontWeight: "normal",
    fontSize: 1
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

Body.displayName = "Body";

export const Icon = styled("span")<BaseProps>(
  BASE_TEXT_STYLE,
  css({
    fontFamily: "icon",
    fontWeight: "normal",
    fontSize: 2,
    lineHeight: "1rem",
    color: "inherit"
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

Icon.displayName = "Icon";

interface HeadlineProps {
  headlineSize: "s" | "m" | "l";
}

export const Headline = styled("h2")<BaseProps>(
  BASE_TEXT_STYLE,
  css({
    fontFamily: "textAlt",
    fontWeight: "bold",
    fontSize: 2,
    lineHeight: 1,
    textTransform: "uppercase"
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

Headline.displayName = "Headline";

export const Title = styled("h2")<BaseProps>(
  BASE_TEXT_STYLE,
  css({
    fontFamily: "textAlt",
    fontWeight: "bold",
    fontSize: 3,
    lineHeight: 1,
    textTransform: "uppercase"
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

Title.displayName = "Title";
