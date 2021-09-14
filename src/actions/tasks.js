import {
  GET_TASKS,
  GET_TASKS_FAIL,
  SET_CURRENT_TASK,
  CLEAR_CURRENT,
  CREATE_TASK,
  CREATE_TASK_FAIL,
  UPDATE_TASK,
  UPDATE_TASK_FAIL,
  DELETE_TASK,
  DELETE_TASK_FAIL,
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

export const createTasks = (data) => async (dispatch) => {
  try {
    const res = await TaskDataService.create(data);

    dispatch({
      type: CREATE_TASK,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    dispatch({
      type: CREATE_TASK_FAIL,
      payload: err.resp,
    });

    return Promise.reject(err);
  }
};

export const updateTasks = (id, data) => async (dispatch) => {
  try {
    const res = await TaskDataService.update(id, data);

    dispatch({
      type: UPDATE_TASK,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    dispatch({
      type: UPDATE_TASK_FAIL,
      type: err.resp,
    });
    return Promise.reject(err);
  }
};

export const deleteProjects = (id) => async (dispatch) => {
  try {
    await TaskDataService.delete(id);

    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: DELETE_TASK_FAIL,
      payload: err.response.data,
    });
  }
};
