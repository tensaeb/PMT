import { USER_LOADED_SUCCESS, USER_LOADED_FAIL } from "./types";
import UserDataService from "../services/userServices";

export const loadUser = () => async (dispatch) => {
  try {
    const res = await UserDataService.getall();

    dispatch({
      type: USER_LOADED_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_LOADED_FAIL,
     // payload: err.response.data,
    });
  }
};

// if (localStorage.getItem("access")) {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("access")}`,
//       Accept: "application/json",
//     },
//   };
