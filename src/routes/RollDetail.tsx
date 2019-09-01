import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { format, fromUnixTime } from "date-fns";
import { useSelector } from "react-redux";
import { getRoll, AppState } from "../store";
import {
  ViewContainer,
  Title,
  Headline,
  Body,
  Icon,
  Grid,
  LinkButton,
  Button
} from "../components";

interface Props extends RouteComponentProps<{ rollId: string }> {}

export const RollDetail: React.FC<Props> = (props: Props) => {
  const { rollId } = props;
  const roll = useSelector((s: AppState) => getRoll(s, rollId));

  return roll ? (
    <ViewContainer
      backLink
      action={
        <LinkButton to="edit" variant="secondary">
          <Icon>edit</Icon>
        </LinkButton>
      }
    >
      <Title>{roll.stock}</Title>
      <Title mb={2}>ISO {roll.iso}</Title>

      <Grid gridTemplateColumns="1fr" gridRowGap={1} mb={6}>
        {roll.note ? <Body>{roll.note}</Body> : null}
        <Body color="textAlt">{roll.camera}</Body>
        <Body color="textAlt">
          Loaded {format(fromUnixTime(roll.createdTime), "dd MMM yy")}
        </Body>
      </Grid>

      <Grid
        gridTemplateColumns="1fr max-content"
        gridGap={4}
        alignItems="start"
        mb={5}
      >
        <Title>
          {roll.exposedFrames}/{roll.maxFrames}
        </Title>
        {`${roll.exposedFrames}` === roll.maxFrames ? (
          <Button variant="disabled" disabled>
            <Icon>add</Icon>
          </Button>
        ) : (
          <LinkButton to="new-frame">
            <Icon>add</Icon>
          </LinkButton>
        )}
      </Grid>
      {roll.frames.map((frame, index) => (
        <Link to={`${frame.id}/edit`} key={frame.id}>
          <Grid gridTemplateColumns="40px 1fr" gridGap={2} mb={5}>
            <Headline>{roll.frames.length - index}</Headline>
            <Grid gridTemplateColumns="1fr" gridGap={2}>
              {frame.note ? <Body>{frame.note}</Body> : null}
              <Body>
                {frame.shutter} at f/{frame.aperture}
              </Body>
              <Body color="textAlt">Focal: {frame.focalLength}mm</Body>
              <Body color="textAlt">
                {format(fromUnixTime(frame.captureTime), "H:mm 'on' dd MMM yy")}
              </Body>
            </Grid>
          </Grid>
        </Link>
      ))}
    </ViewContainer>
  ) : null;
};
