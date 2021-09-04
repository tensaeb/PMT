import axios from "axios";
import { ACTIVATION_SUCCESS, ACTIVATION_FAIL } from "./types";

const apiUrl = "https://projmangtool.herokuapp.com";

export const verify = (token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ token });

  try {
    await axios.post(`${apiUrl}/signup/verify/?code=`, body, config);

    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};
