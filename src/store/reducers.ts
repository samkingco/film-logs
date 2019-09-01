import {
  AppState,
  ActionTypes,
  CREATE_ROLL,
  UPDATE_ROLL,
  DELETE_ROLL,
  CREATE_FRAME,
  UPDATE_FRAME,
  DELETE_FRAME,
  SET_THEME_MODE
} from "./types";

const initialState: AppState = {
  prevRoll: undefined,
  rollsById: {},
  prevFrame: undefined,
  framesById: {},
  themeMode: "dark"
};

export function reducer(state: AppState = initialState, action: ActionTypes) {
  switch (action.type) {
    case CREATE_ROLL:
      return {
        ...state,
        prevRoll: action.roll,
        rollsById: {
          ...state.rollsById,
          [action.roll.id]: action.roll
        }
      };
    case UPDATE_ROLL:
      return {
        ...state,
        rollsById: {
          ...state.rollsById,
          [action.roll.id]: action.roll
        }
      };
    case DELETE_ROLL:
      const withoutRoll = { ...state.rollsById };
      delete withoutRoll[action.rollId];
      return {
        ...state,
        rollsById: withoutRoll
      };
    case CREATE_FRAME:
      return {
        ...state,
        prevFrame: action.frame,
        framesById: {
          ...state.framesById,
          [action.frame.id]: action.frame
        },
        rollsById: {
          ...state.rollsById,
          [action.rollId]: {
            ...state.rollsById[action.rollId],
            frameIds: [
              action.frame.id,
              ...state.rollsById[action.rollId].frameIds
            ]
          }
        }
      };
    case UPDATE_FRAME:
      return {
        ...state,
        framesById: {
          ...state.framesById,
          [action.frame.id]: action.frame
        }
      };
    case DELETE_FRAME:
      const withoutFrame = { ...state.framesById };
      delete withoutFrame[action.frameId];
      return {
        ...state,
        framesById: withoutFrame
      };
    case SET_THEME_MODE:
      return {
        ...state,
        themeMode: action.themeMode
      };
    default:
      return state;
  }
}
