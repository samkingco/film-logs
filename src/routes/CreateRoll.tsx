import React from "react";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../useInput";
import { NewRoll, createRoll, getPrevRoll } from "../store";
import {
  ViewContainer,
  Grid,
  Label,
  Input,
  TextArea,
  Button
} from "../components";

interface Props extends RouteComponentProps {}

export const CreateRoll: React.FC<Props> = (props: Props) => {
  const { navigate } = props;
  const prevRoll = useSelector(getPrevRoll);
  const dispatch = useDispatch();
  const stock = useInput((prevRoll && prevRoll.stock) || "");
  const iso = useInput((prevRoll && prevRoll.iso) || "");
  const maxFrames = useInput((prevRoll && prevRoll.maxFrames) || "");
  const camera = useInput((prevRoll && prevRoll.camera) || "");
  const note = useInput("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newRoll: NewRoll = {
      stock: stock.value,
      iso: iso.value,
      maxFrames: maxFrames.value,
      camera: camera.value,
      note: note.value
    };

    dispatch(createRoll(newRoll));
    if (navigate) {
      navigate("../");
    }
  };

  return (
    <ViewContainer backLink>
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
          Add roll
        </Button>
      </form>
    </ViewContainer>
  );
};
