import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

const apiUrl = "https://projmangtool.herokuapp.com";

export const register = (fname, lname, email, password) => async (dispatch) => {
  const config = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({ email, password, fname, lname });

  try {
    const res = await axios.post(`${apiUrl}/signup/`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
