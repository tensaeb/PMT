import {
  CREATE_PROJECT,
  RETRIEVE_PROJECTS,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  SET_CURRENT_PROJECT,
  CLEAR_CURRENT,
  RETRIEVE_USER_PROJECTS,
} from "../actions/types";

const initialState = {
  project: [],
  current: null,
  allprojects: [],
};

function projectReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROJECT:
      return {
        ...state,
        allprojects: [...state.project, payload],
      };

    case RETRIEVE_USER_PROJECTS:
      return {
        ...state,
        project: payload,
      };

    case RETRIEVE_PROJECTS:
      return {
        ...state,
        allprojects: payload,
      };

    case UPDATE_PROJECT:
      return state.project.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload,
          };
        } else {
          return state.project;
        }
      });

    case DELETE_PROJECT:
      return {
        ...state,
        project: state.project.filter((item) => item.id !== payload),
      };

    case SET_CURRENT_PROJECT:
      return {
        ...state,
        current: payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    default:
      return state;
  }
}

export default projectReducer;
