import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { format, fromUnixTime } from "date-fns";
import { useSelector } from "react-redux";
import { getRolls } from "../store";
import {
  ViewContainer,
  Headline,
  Title,
  Body,
  LinkButton,
  Icon,
  Box,
  Grid
} from "../components";

interface Props extends RouteComponentProps {}

export const RollsList: React.FC<Props> = () => {
  const rolls = useSelector(getRolls);

  return (
    <ViewContainer
      action={
        <LinkButton to="/settings" variant="tertiary" color="textAlt">
          <Icon>settings</Icon>
        </LinkButton>
      }
    >
      <Grid
        gridTemplateColumns="1fr max-content"
        gridGap={4}
        alignItems="start"
        mb={6}
      >
        <Title>Film rolls</Title>
        <LinkButton to="/new-roll">
          <Icon role="presentation">add</Icon>
        </LinkButton>
      </Grid>
      {rolls.map(roll => (
        <Link to={roll.id} key={roll.id}>
          <Box mb={5}>
            <Grid gridTemplateColumns="1fr max-content" gridGap={4} mb={2}>
              <Headline>
                {roll.stock} {roll.iso}
              </Headline>
              <Body color="textAlt">
                {roll.exposedFrames} / {roll.maxFrames}
              </Body>
            </Grid>
            <Grid gridTemplateColumns="1fr" gridGap={1}>
              {roll.note ? <Body>{roll.note}</Body> : null}
              <Body color="textAlt">{roll.camera}</Body>
              <Body color="textAlt">
                Loaded {format(fromUnixTime(roll.createdTime), "dd MMM yy")}
              </Body>
            </Grid>
          </Box>
        </Link>
      ))}
    </ViewContainer>
  );
};
