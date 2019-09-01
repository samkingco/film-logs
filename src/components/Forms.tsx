import { styled, css } from "./index";
import {
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
  BaseElementProps,
  TypographyProps
} from "./props";

export const Label = styled("label")<BaseElementProps>(
  css({
    m: 0,
    fontFamily: "text",
    fontSize: 0,
    lineHeight: 1,
    letterSpacing: "normal",
    color: "textAlt"
  }),
  BASE_ELEMENT_PROPS
);

const inputStyles = css({
  width: "100%",
  color: "text",
  fontFamily: "text",
  fontSize: 3,
  px: 0,
  py: 2,
  background: "transparent",
  border: "none",
  borderBottomWidth: "2px",
  borderBottomStyle: "solid",
  borderBottomColor: "bgAlt",
  borderRadius: 0,
  appearance: "none",
  outline: "none",
  "&:focus": {
    borderBottomColor: "text"
  }
});

export const Input = styled("input")<BaseElementProps | TypographyProps>(
  inputStyles,
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

// Crude for now
export const Checkbox = styled("input")<BaseElementProps | TypographyProps>(
  css({
    m: 0,
    p: 0,
    width: "20px",
    height: "20px",
    fontFamily: "icon",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "textAlt",
    bg: "none",
    outline: "none",
    appearance: "none",
    borderRadius: 0,
    "&:checked": {
      bg: "accent",
      borderColor: "accent"
    }
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

export const CheckboxLabel = styled("label")<
  BaseElementProps | TypographyProps
>(
  css({
    m: 0,
    letterSpacing: "normal",
    fontFamily: "textAlt",
    fontWeight: "bold",
    fontSize: 2,
    lineHeight: 1,
    textTransform: "uppercase"
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

export const TextArea = styled("textarea")<BaseElementProps | TypographyProps>(
  inputStyles,
  css({
    fontSize: 2,
    resize: "none",
    textIndent: /iPhone|iPad|iPod/i.test(navigator.userAgent) ? "-3px" : "0",
    "&::placeholder": {
      textIndent: "0"
    }
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS
);

Input.displayName = "Input";
