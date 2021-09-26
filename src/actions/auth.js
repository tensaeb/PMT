import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  SET_CURREN_USER,
} from "./types";

import AuthService from "../services/auth.service";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const register =
  (first_name, last_name, email, password) => async (dispatch) => {
    return AuthService.register(first_name, last_name, email, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const login = (email, password) => async (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      const token = data.access;
      const decoded = jwt_decode(token);

      dispatch(setCurrentUser(decoded));

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const setCurrentUser = (decoded) => async (dispatch) => {
  return axios
    .get(`https://projmangtool.herokuapp.com/users/${decoded.user_id}`)
    .then((res) => {
      if (res.data) {
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        dispatch({ type: SET_CURREN_USER, payload: res.data });
      }
    });

  //   return {
  //     type: SET_CURREN_USER,
  //     payload: decoded,
  //   };
};
