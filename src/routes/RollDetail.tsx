import React, { useState } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { getRoll, AppState, deleteRoll } from "../store";

interface Props extends RouteComponentProps<{ rollId: string }> {}

export const RollDetail: React.FC<Props> = (props: Props) => {
  const { rollId, navigate } = props;
  const roll = useSelector((s: AppState) => getRoll(s, rollId));
  const dispatch = useDispatch();
  const [showDeleteConfirmPrompt, setShowDeleteConfirmPrompt] = useState(false);

  const onDeleteRoll = () => {
    if (rollId) {
      dispatch(deleteRoll(rollId));
      if (navigate) {
        navigate("../");
      }
    }
  };

  return roll ? (
    <>
      {showDeleteConfirmPrompt ? (
        <div style={{ border: "1px solid red", padding: 16 }}>
          <h3>Delete roll?</h3>
          <button onClick={() => setShowDeleteConfirmPrompt(false)}>No</button>
          <button onClick={onDeleteRoll}>Yes</button>
        </div>
      ) : null}
      <Link to="../">← Back</Link>
      <h1>{roll.stock}</h1>
      {roll.note ? <p>{roll.note}</p> : null}
      <p>ISO: {roll.iso}</p>
      <p>Camera: {roll.camera}</p>
      <p>Created: {roll.createdTime}</p>
      <p>
        Exposed: {roll.exposedFrames}/{roll.maxFrames}
      </p>
      <p>
        <Link to="new-frame">Add frame</Link>
      </p>
      {roll.frames.map((frame, index) => (
        <div key={frame.id}>
          <p>
            Exposure {roll.frames.length - index} of {roll.maxFrames}
          </p>
          <p>{`${frame.shutter} @ f/${frame.aperture}`}</p>
          <p>
            <Link to={frame.id}>View frame</Link>
          </p>
        </div>
      ))}
      <p>
        <Link to="edit">Edit roll</Link>
      </p>
      <p>
        <button onClick={() => setShowDeleteConfirmPrompt(true)}>
          Delete roll
        </button>
      </p>
    </>
  ) : null;
};
