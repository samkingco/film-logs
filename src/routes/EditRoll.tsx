import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../useInput";
import { updateRoll, deleteRoll, NewRoll, AppState, getRoll } from "../store";
import {
  ViewContainer,
  Box,
  Grid,
  Headline,
  Body,
  Input,
  Label,
  TextArea,
  Button,
  Icon
} from "../components";

interface Props extends RouteComponentProps<{ rollId: string }> {}

export const EditRoll: React.FC<Props> = (props: Props) => {
  const { rollId, navigate } = props;
  const roll = useSelector((s: AppState) => getRoll(s, rollId));
  const dispatch = useDispatch();
  const stock = useInput((roll && roll.stock) || "");
  const iso = useInput((roll && roll.iso) || "");
  const maxFrames = useInput((roll && roll.maxFrames) || "");
  const camera = useInput((roll && roll.camera) || "");
  const note = useInput((roll && roll.note) || "");
  const [showDeleteConfirmPrompt, setShowDeleteConfirmPrompt] = useState(false);

  const onDeleteRoll = () => {
    if (rollId) {
      dispatch(deleteRoll(rollId));
      if (navigate) {
        navigate("../");
      }
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedRoll: NewRoll = {
      stock: stock.value,
      iso: iso.value,
      maxFrames: maxFrames.value,
      camera: camera.value,
      note: note.value
    };

    if (roll) {
      dispatch(updateRoll({ ...roll, ...updatedRoll }));
      if (navigate) {
        navigate("../");
      }
    }
  };

  return (
    <ViewContainer
      backLink
      action={
        <Button
          variant="secondary"
          borderColor="accent"
          color="accent"
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
            <Headline mb={2}>Delete roll?</Headline>
            <Body>This can't be undone</Body>
          </Box>
          <Grid gridTemplateColumns="1fr 1fr" gridGap={3}>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteConfirmPrompt(false)}
            >
              Nope
            </Button>
            <Button onClick={onDeleteRoll}>Yes, delete</Button>
          </Grid>
        </Grid>
      ) : null}

      <form onSubmit={onSubmit}>
        <Grid gridTemplateColumns="1fr" gridRowGap={4} mb={4}>
          <Grid gridTemplateColumns="1fr">
            <Label htmlFor="stock">Stock</Label>
            <Input id="stock" placeholder="e.g. Kodak Portra" {...stock} />
          </Grid>

          <Grid gridTemplateColumns="1fr 1fr" gridGap={4}>
            <Grid gridTemplateColumns="1fr">
              <Label htmlFor="iso">ISO</Label>
              <Input
                id="iso"
                placeholder="0"
                inputMode="decimal"
                pattern="[0-9]*"
                {...iso}
              />
            </Grid>

            <Grid gridTemplateColumns="1fr">
              <Label htmlFor="maxFrames">Frame count</Label>
              <Input
                id="maxFrames"
                placeholder="0"
                inputMode="decimal"
                pattern="[0-9]*"
                {...maxFrames}
              />
            </Grid>
          </Grid>

          <Grid gridTemplateColumns="1fr">
            <Label htmlFor="camera">Camera</Label>
            <Input
              id="camera"
              placeholder="e.g. Mamiya 7"
              fontSize={2}
              {...camera}
            />
          </Grid>

          <Grid gridTemplateColumns="1fr">
            <Label htmlFor="note">Notes</Label>
            <TextArea
              id="note"
              placeholder="Useful for keeping track of any shoot details"
              rows={3}
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
