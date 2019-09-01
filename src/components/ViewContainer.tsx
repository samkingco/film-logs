import React from "react";
import { styled, css, Box, Grid, Icon } from "./index";
import { LinkButton } from "./Button";

interface Props {
  children: React.ReactNode;
  backLink?: boolean;
  backLinkTo?: string;
  action?: React.ReactNode;
}

export const ViewContainer = styled(
  ({ children, backLink, backLinkTo, action, ...props }: Props) => (
    <div {...props}>
      <Grid
        gridTemplateColumns="1fr min-content"
        gridGap={4}
        mb={5}
        minHeight="40px"
      >
        <Box>
          {backLink ? (
            <LinkButton to={backLinkTo || "../"} variant="secondary">
              <Icon>arrow_back</Icon>
            </LinkButton>
          ) : (
            "\u00a0"
          )}
        </Box>
        <Box>{action || null}</Box>
      </Grid>
      {children}
    </div>
  )
)(
  css({
    maxWidth: "32rem",
    mx: "auto",
    py: 6,
    display: "grid",
    gridTemplateColumns: "24px 1fr 24px",
    gridAutoRows: "min-content",
    "& > *": {
      gridColumn: "2"
    }
  })
);
