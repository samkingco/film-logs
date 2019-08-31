import uuid from "uuid/v4";
import { getUnixTime } from "date-fns";
import {
  Roll,
  NewRoll,
  CREATE_ROLL,
  UPDATE_ROLL,
  DELETE_ROLL,
  CreateRollAction,
  UpdateRollAction,
  DeleteRollAction,
  Frame,
  NewFrame,
  CreateFrameAction,
  CREATE_FRAME,
  UpdateFrameAction,
  UPDATE_FRAME,
  DeleteFrameAction,
  DELETE_FRAME
} from "./types";

export function createRoll(roll: NewRoll): CreateRollAction {
  const createdRoll: Roll = {
    id: uuid(),
    createdTime: getUnixTime(new Date()),
    frameIds: [],
    ...roll
  };
  return {
    type: CREATE_ROLL,
    roll: createdRoll
  };
}

export function updateRoll(roll: Roll): UpdateRollAction {
  return {
    type: UPDATE_ROLL,
    roll
  };
}

export function deleteRoll(rollId: string): DeleteRollAction {
  return {
    type: DELETE_ROLL,
    rollId
  };
}

export function createFrame(
  frame: NewFrame,
  rollId: string
): CreateFrameAction {
  const createdFrame: Frame = {
    id: uuid(),
    captureTime: getUnixTime(new Date()),
    ...frame
  };

  return {
    type: CREATE_FRAME,
    frame: createdFrame,
    rollId
  };
}

export function updateFrame(frame: Frame): UpdateFrameAction {
  return {
    type: UPDATE_FRAME,
    frame
  };
}

export function deleteFrame(frameId: string): DeleteFrameAction {
  return {
    type: DELETE_FRAME,
    frameId
  };
}
