import { DISPLAY_DELETE_CONFIRM, CLOSE_DELETE_CONFIRM } from "../actions/types";

const initialState = {
  confirmMessage: false,
  itemToDelete: null,
};

function confirmDeleteReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case DISPLAY_DELETE_CONFIRM:
      return {
        confirmMessage: true,
        itemToDelete: payload,
      };

    case CLOSE_DELETE_CONFIRM:
      return {
        confirmMessage: false,
        itemToDelete: null,
      };

    default:
      return state;
  }
}

export default confirmDeleteReducer;
