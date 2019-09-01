import React from "react";
import { Link } from "@reach/router";
import { styled, css, variant } from "./";
import {
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
  BaseElementProps,
  TypographyProps
} from "./props";

interface ButtonProps {
  variant?: string;
  size?: string;
}

const buttonStyles = css({
  display: "inline-flex",
  width: "auto",
  minWidth: "48px",
  m: 0,
  py: 2,
  px: 3,
  fontFamily: "text",
  fontSize: 0,
  lineHeight: 2,
  textAlign: "center",
  textDecoration: "none",
  verticalAlign: "middle",
  justifyContent: "center",
  alignItems: "center",
  bg: "accent",
  color: "bg",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "transparent",
  outline: "none",
  appearance: "none",
  "&:hover": {
    bg: "accentAlt"
  },
  "&:disabled": {
    bg: "text",
    borderColor: "transparent",
    color: "bg",
    opacity: 0.16
  }
});

const buttonVariants = variant({
  variants: {
    secondary: {
      bg: "transparent",
      borderColor: "textAlt",
      color: "text",
      "&:hover": {
        bg: "bgAlt",
        borderColor: "text"
      }
    },
    tertiary: {
      bg: "transparent",
      borderColor: "transparent",
      color: "text",
      "&:hover": {
        bg: "bgAlt",
        borderColor: "transparent"
      }
    },
    destructive: {
      bg: "transparent",
      borderColor: "accent",
      color: "accent",
      "&:hover": {
        bg: "acecnt",
        borderColor: "accentAlt",
        color: "bg"
      }
    }
  }
});

const buttonSizes = variant({
  prop: "size",
  variants: {
    large: {
      py: 3,
      px: 4,
      fontSize: 2,
      fontFamily: "textAlt",
      textTransform: "uppercase"
    }
  }
});

export const Button = styled("button")<
  ButtonProps | BaseElementProps | TypographyProps
>(
  buttonStyles,
  buttonVariants,
  buttonSizes,
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

export const LinkButton = styled(props => <Link {...props} />)<
  ButtonProps | BaseElementProps | TypographyProps
>(
  buttonStyles,
  buttonVariants,
  buttonSizes,
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);
