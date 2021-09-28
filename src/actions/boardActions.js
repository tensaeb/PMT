import { SET_ACTIVE_BOARD } from "./types";
export const setActiveBoard = (id) => {
  return {
    type: SET_ACTIVE_BOARD,
    payload: id,
  };
};
