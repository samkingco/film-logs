import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import useForm from "react-hook-form";
import { NewFrame, createFrame, getPrevFrame } from "../store";

interface Props extends RouteComponentProps<{ rollId: string }> {}

export const CreateFrame: React.FC<Props> = (props: Props) => {
  const { rollId, navigate } = props;
  const prevFrame = useSelector(getPrevFrame);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<NewFrame>();

  const onSubmit = handleSubmit(newFrame => {
    if (rollId) {
      dispatch(createFrame(newFrame, rollId));
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
          name="focalLength"
          placeholder="Focal length"
          defaultValue={(prevFrame && prevFrame.focalLength) || ""}
          inputMode="decimal"
          pattern="[0-9]*"
          ref={register}
        />
        <input
          name="aperture"
          placeholder="Aperture"
          defaultValue={(prevFrame && prevFrame.aperture) || ""}
          inputMode="decimal"
          pattern="[0-9]+([\.,][0-9]+)?"
          ref={register}
        />
        <input
          name="shutterWhole"
          placeholder="1"
          defaultValue={(prevFrame && prevFrame.shutterWhole) || "1"}
          inputMode="decimal"
          pattern="[0-9]*"
          ref={register}
        />
        <input
          name="shutterFraction"
          placeholder="250"
          defaultValue={(prevFrame && prevFrame.shutterFraction) || ""}
          inputMode="decimal"
          pattern="[0-9]*"
          ref={register}
        />
        <input name="note" placeholder="Notes" ref={register} />
        <button type="submit">Add frame</button>
      </form>
    </>
  );
};
