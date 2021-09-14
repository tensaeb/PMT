import {
  GET_TASKS,
  SET_CURRENT_TASK,
  CLEAR_CURRENT,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../actions/types";

const initialState = {
  task: [],
  current: null,
  loading: false,
  error: null,
};

function taskReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        task: payload,
      };

    case CREATE_TASK:
      return {
        ...state,
        project: [...state.task, payload],
      };

    case UPDATE_TASK:
      return state.task.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload,
          };
        } else {
          return state.task;
        }
      });

    case DELETE_TASK:
      return {
        ...state,
        project: state.task.filter((item) => item.id !== payload),
      };

    case SET_CURRENT_TASK:
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
export default taskReducer;
