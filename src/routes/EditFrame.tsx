import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../useInput";
import {
  NewFrame,
  getFrame,
  AppState,
  deleteFrame,
  updateFrame
} from "../store";
import {
  ViewContainer,
  Box,
  Grid,
  Headline,
  Body,
  Icon,
  Label,
  Input,
  TextArea,
  Button
} from "../components";

interface Props
  extends RouteComponentProps<{ rollId: string; frameId: string }> {}

export const EditFrame: React.FC<Props> = (props: Props) => {
  const { frameId, navigate } = props;
  const frame = useSelector((s: AppState) => getFrame(s, frameId));
  const dispatch = useDispatch();
  const focalLength = useInput((frame && frame.focalLength) || "");
  const aperture = useInput((frame && frame.aperture) || "");
  const shutterWhole = useInput((frame && frame.shutterWhole) || "");
  const shutterFraction = useInput((frame && frame.shutterFraction) || "");
  const note = useInput("");
  const [showDeleteConfirmPrompt, setShowDeleteConfirmPrompt] = useState(false);

  const onDeleteFrame = () => {
    if (frameId) {
      dispatch(deleteFrame(frameId));
      if (navigate) {
        navigate("../../");
      }
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedFrame: NewFrame = {
      focalLength: focalLength.value,
      aperture: aperture.value,
      shutterWhole: shutterWhole.value,
      shutterFraction: shutterFraction.value,
      note: note.value
    };

    if (frame) {
      dispatch(updateFrame({ ...frame, ...updatedFrame }));
      if (navigate) {
        navigate("../../");
      }
    }
  };

  return (
    <ViewContainer
      backLink
      backLinkTo="../../"
      action={
        <Button
          variant="destructive"
          onClick={() => setShowDeleteConfirmPrompt(true)}
        >
          <Icon>delete_outline</Icon>
        </Button>
      }
    >
      {showDeleteConfirmPrompt ? (
        <Grid
          gridTemplateColumns="1fr"
          gridRowGap={4}
          mb={4}
          p={4}
          bg="bgAlt"
          gridColumn="1 / -1"
        >
          <Box>
            <Headline mb={2}>Delete frame?</Headline>
            <Body>This can't be undone</Body>
          </Box>
          <Grid gridTemplateColumns="1fr 1fr" gridGap={3}>
            <Button
              variant="secondary"
              size="large"
              onClick={() => setShowDeleteConfirmPrompt(false)}
            >
              Nope
            </Button>
            <Button size="large" onClick={onDeleteFrame}>
              Yes
            </Button>
          </Grid>
        </Grid>
      ) : null}

      <form onSubmit={onSubmit} action="#">
        <Grid gridTemplateColumns="1fr" gridRowGap={4} mb={4}>
          <Grid gridTemplateColumns="2fr 1fr" gridColumnGap={4}>
            <Grid gridTemplateColumns="1fr">
              <Label>Shutter speed</Label>
              <Grid
                gridTemplateColumns="40px min-content 5fr"
                gridColumnGap={2}
                alignItems="center"
              >
                <Input
                  name="shutterWhole"
                  placeholder="0"
                  inputMode="decimal"
                  pattern="[0-9]*"
                  {...shutterWhole}
                />
                <Body fontSize={3} color="textAlt">
                  /
                </Body>
                <Input
                  name="shutterFraction"
                  placeholder="0"
                  inputMode="decimal"
                  pattern="[0-9]*"
                  {...shutterFraction}
                />
              </Grid>
            </Grid>

            <Grid gridTemplateColumns="1fr">
              <Label htmlFor="aperture">Aperture</Label>
              <Input
                name="aperture"
                placeholder="0"
                inputMode="decimal"
                pattern="[0-9]+([\.,][0-9]+)?"
                {...aperture}
              />
            </Grid>
          </Grid>

          <Grid gridTemplateColumns="1fr">
            <Label htmlFor="focalLength">Focal length (mm)</Label>
            <Input
              name="focalLength"
              placeholder="0"
              inputMode="decimal"
              pattern="[0-9]*"
              {...focalLength}
            />
          </Grid>

          <Grid gridTemplateColumns="1fr">
            <Label htmlFor="note">Notes</Label>
            <TextArea
              name="note"
              placeholder="Any notes about the frame"
              {...note}
            />
          </Grid>
        </Grid>

        <Button type="submit" width="100%" size="large">
          Save
        </Button>
      </form>
    </ViewContainer>
  );
};
