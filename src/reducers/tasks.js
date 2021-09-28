import {
  GET_TASKS,
  SET_CURRENT_TASK,
  CLEAR_CURRENT,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  GET_USER_TASKS,
} from "../actions/types";

const initialState = {
  task: [],
  current: null,
  allTasks: [],
  loading: false,
  error: null,
};

function taskReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        allTasks: payload,
      };

    case CREATE_TASK:
      return {
        ...state,
        allTasks: [...state.task, payload],
      };

    case UPDATE_TASK:
      return state.allTasks.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload,
          };
        } else {
          return state.task;
        }
      });

    case GET_USER_TASKS:
      return {
        ...state,
        task: payload,
      };

    case DELETE_TASK:
      return {
        ...state,
        allTasks: state.task.filter((item) => item.id !== payload),
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
