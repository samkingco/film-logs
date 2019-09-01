import { ThemeColorModeName } from "../components";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface AppState {
  prevRoll: Roll | undefined;
  rollsById: RollsState;
  prevFrame: Frame | undefined;
  framesById: FramesState;
  themeMode: ThemeColorModeName;
}

export interface RollsState {
  [id: string]: Roll;
}

export interface FramesState {
  [id: string]: Frame;
}

export interface Roll {
  id: string;
  stock: string;
  iso: string;
  camera: string;
  maxFrames: string;
  note?: string;
  frameIds: string[];
  createdTime: number;
}

export type NewRoll = Omit<Roll, "id" | "frameIds" | "createdTime">;

export interface DisplayRoll extends Roll {
  frames: DisplayFrame[];
  exposedFrames: number;
}

export interface Frame {
  id: string;
  captureTime: number;
  focalLength: string;
  aperture: string;
  shutterWhole: string;
  shutterFraction?: string;
  shutterStr?: string;
  note?: string;
}

export interface DisplayFrame extends Frame {
  shutter: string;
}

export type NewFrame = Omit<Frame, "id" | "captureTime">;

export const CREATE_ROLL = "CREATE_ROLL";
export const UPDATE_ROLL = "UPDATE_ROLL";
export const DELETE_ROLL = "DELETE_ROLL";
export const CREATE_FRAME = "CREATE_FRAME";
export const UPDATE_FRAME = "UPDATE_FRAME";
export const DELETE_FRAME = "DELETE_FRAME";
export const SET_THEME_MODE = "SET_THEME_MODE";

export interface CreateRollAction {
  type: typeof CREATE_ROLL;
  roll: Roll;
}

export interface UpdateRollAction {
  type: typeof UPDATE_ROLL;
  roll: Roll;
}

export interface DeleteRollAction {
  type: typeof DELETE_ROLL;
  rollId: string;
}

export interface CreateFrameAction {
  type: typeof CREATE_FRAME;
  rollId: string;
  frame: Frame;
}

export interface UpdateFrameAction {
  type: typeof UPDATE_FRAME;
  frame: Frame;
}

export interface DeleteFrameAction {
  type: typeof DELETE_FRAME;
  frameId: string;
}

export interface SetThemeModeAction {
  type: typeof SET_THEME_MODE;
  themeMode: ThemeColorModeName;
}

export type ActionTypes =
  | CreateRollAction
  | UpdateRollAction
  | DeleteRollAction
  | CreateFrameAction
  | UpdateFrameAction
  | DeleteFrameAction
  | SetThemeModeAction;
