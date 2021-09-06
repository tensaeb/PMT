import {
  GET_TASKS,
  GET_TASKS_FAIL,
  SET_CURRENT_TASK,
  CLEAR_CURRENT,
} from "./types";
import TaskDataService from "../services/taskService";

//set current log
export const setCurrent = (task) => {
  return {
    type: SET_CURRENT_TASK,
    payload: task,
  };
};

//clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const getTasks = () => async (dispatch) => {
  try {
    const res = await TaskDataService.getAll();

    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_TASKS_FAIL,
      payload: err.response.data,
    });
  }
};
