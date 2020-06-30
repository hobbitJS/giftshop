import { takeLatest, call, put, all } from "redux-saga/effects";

import { auth } from "../../firebase/firebase.utils";

import LoginActionTypes from "./login.types";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./login.actions";

// SIGN IN

export function* loginAsync({ payload: { email, password } }) {
  try {
    const authData = yield auth.signInWithEmailAndPassword(email, password);

    yield put(signInSuccess(authData.user.uid));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* loginStart() {
  yield takeLatest(LoginActionTypes.SIGN_IN_START, loginAsync);
}

// SIGN OUT

export function* logoutAsync() {
  try {
    yield auth.signOut();

    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* logoutStart() {
  yield takeLatest(LoginActionTypes.SIGN_OUT_START, logoutAsync);
}

export function* loginSagas() {
  yield all([call(loginStart), call(logoutStart)]);
}
