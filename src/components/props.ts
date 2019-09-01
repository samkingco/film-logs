import * as system from "styled-system";
import { compose } from "styled-system";

export const COMMON_PROPS = compose(
  system.color,
  system.space
);
export type CommonProps = system.ColorProps | system.SpaceProps;

export const BORDER_PROPS = compose(
  system.borders,
  system.borderColor
);
export type BorderProps = system.BordersProps | system.BorderColorProps;

export const TYPOGRAPHY_PROPS = compose(
  system.fontFamily,
  system.fontSize,
  system.fontStyle,
  system.fontWeight,
  system.lineHeight,
  system.textAlign
);
export type TypographyProps =
  | system.FontFamilyProps
  | system.FontSizeProps
  | system.FontStyleProps
  | system.FontWeightProps
  | system.LineHeightProps
  | system.TextAlignProps;

export const LAYOUT_PROPS = compose(
  system.display,
  system.width,
  system.height,
  system.minWidth,
  system.minHeight,
  system.maxWidth,
  system.maxHeight,
  system.overflow,
  system.verticalAlign,
  system.opacity
);
export type LayoutProps =
  | system.DisplayProps
  | system.WidthProps
  | system.HeightProps
  | system.MinWidthProps
  | system.MinHeightProps
  | system.MaxWidthProps
  | system.MinWidthProps
  | system.OverflowProps
  | system.VerticalAlignProps
  | system.OpacityProps;

export const POSITION_PROPS = compose(
  system.position,
  system.zIndex,
  system.top,
  system.right,
  system.bottom,
  system.left
);
export type PositionProps =
  | system.PositionProps
  | system.ZIndexProps
  | system.TopProps
  | system.RightProps
  | system.BottomProps
  | system.LeftProps;

export const FLEX_CONTAINER_PROPS = compose(
  system.flexBasis,
  system.flexDirection,
  system.flexWrap,
  system.alignContent,
  system.alignItems,
  system.justifyContent,
  system.justifyItems
);
export type FlexContainerProps =
  | system.FlexboxProps
  | system.FlexDirectionProps
  | system.FlexWrapProps
  | system.AlignContentProps
  | system.AlignItemsProps
  | system.JustifyContentProps
  | system.JustifyItemsProps;

export const FLEX_ITEM_PROPS = compose(
  system.flex,
  system.justifySelf,
  system.alignSelf,
  system.order
);
export type FlexItemProps =
  | system.FlexProps
  | system.JustifySelfProps
  | system.AlignSelfProps
  | system.OrderProps;

export const GRID_CONTAINER_PROPS = compose(
  system.gridGap,
  system.gridRowGap,
  system.gridColumnGap,
  system.gridAutoFlow,
  system.gridAutoRows,
  system.gridAutoColumns,
  system.gridTemplateRows,
  system.gridTemplateColumns,
  system.gridTemplateAreas,
  system.alignContent,
  system.alignItems,
  system.justifyContent,
  system.justifyItems
);
export type GridContainerProps =
  | system.GridGapProps
  | system.GridRowGapProps
  | system.GridColumnGapProps
  | system.GridAutoFlowProps
  | system.GridAutoRowsProps
  | system.GridAutoColumnsProps
  | system.GridTemplateRowsProps
  | system.GridTemplateColumnsProps
  | system.GridTemplateAreasProps
  | system.AlignContentProps
  | system.AlignItemsProps
  | system.JustifyContentProps
  | system.JustifyItemsProps;

export const GRID_ITEM_PROPS = compose(
  system.gridColumn,
  system.gridRow,
  system.gridArea
);
export type GridItemProps =
  | system.GridColumnProps
  | system.GridRowProps
  | system.GridAreaProps;

export const BASE_ELEMENT_PROPS = compose(
  COMMON_PROPS,
  BORDER_PROPS,
  LAYOUT_PROPS,
  POSITION_PROPS,
  FLEX_ITEM_PROPS,
  GRID_ITEM_PROPS
);
export type BaseElementProps =
  | CommonProps
  | BorderProps
  | LayoutProps
  | PositionProps
  | FlexItemProps
  | GridItemProps;
