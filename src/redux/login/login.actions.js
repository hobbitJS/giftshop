import LoginActionTypes from "./login.types";

export const changeInputValue = (input, value) => ({
  type: LoginActionTypes.CHANGE_INPUT_VALUE,
  payload: { input, value },
});

export const signInStart = (email, password) => ({
  type: LoginActionTypes.SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (userUid) => ({
  type: LoginActionTypes.SIGN_IN_SUCCESS,
  payload: userUid,
});

export const signInFailure = (error) => ({
  type: LoginActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: LoginActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: LoginActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: LoginActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
