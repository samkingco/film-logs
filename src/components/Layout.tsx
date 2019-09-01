import { styled } from "./index";
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
