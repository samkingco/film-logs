import { styled, css } from "./index";
import {
  BASE_ELEMENT_PROPS,
  FLEX_CONTAINER_PROPS,
  GRID_CONTAINER_PROPS,
  BaseElementProps,
  FlexContainerProps,
  GridContainerProps
} from "./props";

export const Box = styled("div")<BaseElementProps>(BASE_ELEMENT_PROPS);

Box.displayName = "Box";

export const Flex = styled("div")<BaseElementProps | FlexContainerProps>(
  BASE_ELEMENT_PROPS,
  FLEX_CONTAINER_PROPS,
  {
    display: "flex"
  }
);

Flex.displayName = "Flex";

export const Grid = styled("div")<BaseElementProps | GridContainerProps>(
  BASE_ELEMENT_PROPS,
  GRID_CONTAINER_PROPS,
  {
    display: "grid"
  }
);

Grid.displayName = "Grid";

export const Divider = styled("hr")<BaseElementProps | GridContainerProps>(
  css({
    width: "100%",
    border: "none",
    height: "2px",
    bg: "text",
    opacity: 0.24,
    my: 4
  }),
  BASE_ELEMENT_PROPS
);

Divider.displayName = "Divider";
