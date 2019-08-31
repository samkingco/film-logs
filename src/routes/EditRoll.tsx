import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import useForm from "react-hook-form";
import { updateRoll, Roll, AppState, getRoll } from "../store";

interface Props extends RouteComponentProps<{ rollId: string }> {}

export const EditRoll: React.FC<Props> = (props: Props) => {
  const { rollId, navigate } = props;
  const roll = useSelector((s: AppState) => getRoll(s, rollId));
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<Roll>();

  const onSubmit = handleSubmit(updatedRoll => {
    if (roll) {
      dispatch(updateRoll({ ...roll, ...updatedRoll }));
      if (navigate) {
        navigate("../");
      }
    }
  });

  return (
    <>
      <Link to="../">← Back</Link>
      <form onSubmit={onSubmit}>
        <input
          name="stock"
          placeholder="Stock"
          defaultValue={(roll && roll.stock) || ""}
          ref={register}
        />
        <input
          name="iso"
          placeholder="ISO"
          defaultValue={(roll && roll.iso) || ""}
          inputMode="decimal"
          pattern="[0-9]*"
          ref={register}
        />
        <input
          name="maxFrames"
          placeholder="Max frame count"
          defaultValue={(roll && roll.maxFrames) || ""}
          inputMode="decimal"
          pattern="[0-9]*"
          ref={register}
        />
        <input
          name="camera"
          placeholder="Camera"
          defaultValue={(roll && roll.camera) || ""}
          ref={register}
        />
        <textarea
          name="note"
          placeholder="Note"
          defaultValue={(roll && roll.note) || ""}
          ref={register}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};
