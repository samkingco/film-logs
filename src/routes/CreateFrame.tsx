import React from "react";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../useInput";
import { NewFrame, createFrame, getPrevFrame } from "../store";
import {
  ViewContainer,
  Grid,
  Label,
  Input,
  TextArea,
  Button,
  Body
} from "../components";

interface Props extends RouteComponentProps<{ rollId: string }> {}

export const CreateFrame: React.FC<Props> = (props: Props) => {
  const { rollId, navigate } = props;
  const prevFrame = useSelector(getPrevFrame);
  const dispatch = useDispatch();
  const focalLength = useInput((prevFrame && prevFrame.focalLength) || "");
  const aperture = useInput((prevFrame && prevFrame.aperture) || "");
  const shutterWhole = useInput((prevFrame && prevFrame.shutterWhole) || "");
  const shutterFraction = useInput(
    (prevFrame && prevFrame.shutterFraction) || ""
  );
  const note = useInput("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFrame: NewFrame = {
      focalLength: focalLength.value,
      aperture: aperture.value,
      shutterWhole: shutterWhole.value,
      shutterFraction: shutterFraction.value,
      note: note.value
    };

    if (rollId) {
      dispatch(createFrame(newFrame, rollId));
      if (navigate) {
        navigate("../");
      }
    }
  };

  return (
    <ViewContainer backLink>
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
              placeholder="A note about the frame"
              {...note}
            />
          </Grid>
        </Grid>

        <Button type="submit" width="100%" size="large">
          Add frame
        </Button>
      </form>
    </ViewContainer>
  );
};
