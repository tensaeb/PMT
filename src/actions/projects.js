import {
  CREATE_PROJECT,
  CREATE_PROJECT_FAIL,
  RETRIEVE_PROJECTS,
  RETRIEVE_PROJECTS_FAIL,
  UPDATE_PROJECT,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT,
  DELETE_PROJECT_FAIL,
  SET_CURRENT_PROJECT,
  CLEAR_CURRENT,
} from "./types";

import ProjectDataService from "../services/projectService";

//set current log
export const setCurrent = (project) => {
  return {
    type: SET_CURRENT_PROJECT,
    payload: project,
  };
};

//clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const createProject = (name, sdm) => async (dispatch) => {
  try {
    const res = await ProjectDataService.create({ name, sdm });

    dispatch({
      type: CREATE_PROJECT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    dispatch({
      type: CREATE_PROJECT_FAIL,
      payload: err.resp,
    });
    // console.log(err);

    return Promise.reject(err);
  }
};

export const retrieveProjects = () => async (dispatch) => {
  try {
    const res = await ProjectDataService.getAll();

    dispatch({
      type: RETRIEVE_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RETRIEVE_PROJECTS_FAIL,
      payload: err.response.data,
    });
  }
};

export const updateProjects = (id, data) => async (dispatch) => {
  try {
    const res = await ProjectDataService.update(id, data);

    dispatch({
      type: UPDATE_PROJECT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    dispatch({
      type: UPDATE_PROJECT_FAIL,
    });
    return Promise.reject(err);
  }
};

export const deleteProjects = (id) => async (dispatch) => {
  try {
    await ProjectDataService.delete(id);

    dispatch({
      type: DELETE_PROJECT,
      payload: id,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: DELETE_PROJECT_FAIL,
      payload: err.response.data,
    });
  }
};
