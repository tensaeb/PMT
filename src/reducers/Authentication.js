import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_CURREN_USER,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// const initialState = {
//   isLoggedIn: false,
//   currentUser: [],
//   user: []
// };

const initialState =
  user && currentUser ? { isLoggedIn: true, user, currentUser } : {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case SET_CURREN_USER:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        currentUser: null,
      };
    default:
      return state;
  }
}
