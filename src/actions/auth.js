import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

// Login User
export const login = (userName, password) => async dispatch => {
  // console.log(userName, password);
  if (userName === "aravind" && password === "test")
    dispatch({
      type: LOGIN_SUCCESS
    });
  else
    dispatch({
      type: LOGIN_FAIL
    });
};
