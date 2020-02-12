import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
  fail: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        fail: true
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("userId", "User");
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        fail: false
      };
    default:
      return state;
  }
}
