import { GET_TASKS, SET_CURRENT_TASK, CLEAR_CURRENT } from "../actions/types";

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
