import React, { useState } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { AppState, getFrame, deleteFrame } from "../store";

interface Props extends RouteComponentProps<{ frameId: string }> {}

export const FrameDetail: React.FC<Props> = (props: Props) => {
  const { frameId, navigate } = props;
  const frame = useSelector((s: AppState) => getFrame(s, frameId));
  const dispatch = useDispatch();
  const [showDeleteConfirmPrompt, setShowDeleteConfirmPrompt] = useState(false);

  const onDeleteFrame = () => {
    if (frameId) {
      dispatch(deleteFrame(frameId));
      if (navigate) {
        navigate("../");
      }
    }
  };

  return frame ? (
    <>
      {showDeleteConfirmPrompt ? (
        <div style={{ border: "1px solid red", padding: 16 }}>
          <h3>Delete frame?</h3>
          <button onClick={() => setShowDeleteConfirmPrompt(false)}>No</button>
          <button onClick={onDeleteFrame}>Yes</button>
        </div>
      ) : null}
      <Link to="../">← Back</Link>
      <p>{`${frame.shutter} @ f/${frame.aperture}`}</p>
      <p>
        <button onClick={() => setShowDeleteConfirmPrompt(true)}>
          Delete frame
        </button>
      </p>
    </>
  ) : null;
};
