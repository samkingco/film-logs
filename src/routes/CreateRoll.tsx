import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import useForm from "react-hook-form";
import { NewRoll, createRoll, getPrevRoll } from "../store";

interface Props extends RouteComponentProps {}

export const CreateRoll: React.FC<Props> = (props: Props) => {
  const { navigate } = props;
  const prevRoll = useSelector(getPrevRoll);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<NewRoll>();

  const onSubmit = handleSubmit(newRoll => {
    dispatch(createRoll(newRoll));
    if (navigate) {
      navigate("../");
    }
  });

  return (
    <>
      <Link to="../">← Back</Link>
      <form onSubmit={onSubmit}>
        <input
          name="stock"
          placeholder="Stock"
          defaultValue={(prevRoll && prevRoll.stock) || ""}
          ref={register}
        />
        <input
          name="iso"
          placeholder="ISO"
          defaultValue={(prevRoll && prevRoll.iso) || ""}
          inputMode="decimal"
          pattern="[0-9]*"
          ref={register}
        />
        <input
          name="maxFrames"
          placeholder="Max frame count"
          defaultValue={(prevRoll && prevRoll.maxFrames) || ""}
          inputMode="decimal"
          pattern="[0-9]*"
          ref={register}
        />
        <input
          name="camera"
          placeholder="Camera"
          defaultValue={(prevRoll && prevRoll.camera) || ""}
          ref={register}
        />
        <textarea name="note" placeholder="Note" ref={register} />
        <button type="submit">Add roll</button>
      </form>
    </>
  );
};
