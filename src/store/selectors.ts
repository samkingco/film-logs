import { AppState, Frame, DisplayFrame, Roll, DisplayRoll } from "./types";

function sortByKey<T>(key: keyof T) {
  return function(a: T, b: T) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };
}

export function getPrevFrame(state: AppState): Frame | undefined {
  const prevFrame = state.prevFrame;
  return prevFrame;
}

export function getFrame(
  state: AppState,
  frameId?: keyof AppState["framesById"]
): DisplayFrame | undefined {
  if (!frameId) return undefined;

  const frame = state.framesById[frameId];
  if (!frame) return undefined;

  const { shutterWhole: whole, shutterFraction: fraction } = frame;
  const shutter = `${whole}${fraction ? `/${fraction}s` : "s"}`;

  return {
    ...frame,
    shutter
  };
}

export function getPrevRoll(state: AppState): Roll | undefined {
  const prevRoll = state.prevRoll;
  return prevRoll;
}

export function getRoll(
  state: AppState,
  rollId?: string
): DisplayRoll | undefined {
  if (!rollId) return undefined;

  const roll = state.rollsById[rollId];
  if (!roll) return undefined;

  const frames: DisplayFrame[] = roll.frameIds.reduce(
    (memo: DisplayFrame[], frameId) => {
      const frame = getFrame(state, frameId);
      return frame ? [...memo, frame] : memo;
    },
    []
  );

  const sortedFrames = frames
    .sort(sortByKey<DisplayFrame>("captureTime"))
    .reverse();

  return {
    ...roll,
    frames: sortedFrames,
    exposedFrames: sortedFrames.length
  };
}

export function getRolls(state: AppState) {
  const rolls: DisplayRoll[] = Object.keys(state.rollsById).reduce(
    (memo: DisplayRoll[], rollId) => {
      const roll = getRoll(state, rollId);
      return roll ? [...memo, roll] : memo;
    },
    []
  );

  const sortedRolls = rolls
    .sort(sortByKey<DisplayRoll>("createdTime"))
    .reverse();

  return sortedRolls;
}
