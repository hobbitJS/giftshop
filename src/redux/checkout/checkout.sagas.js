import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore } from "../../firebase/firebase.utils";

import CheckoutActionTypes from "./checkout.types";

import { setOrderSuccess, setOrderFailure } from "./checkout.actions";

export function* setOrderAsync(data) {
  const { formData, cartItems } = data.payload;

  try {
    const date = Date.now();

    const formattedDate = new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    const order = {
      ...formData,
      cartItems,
      formattedDate,
      date,
      status: "new",
    };

    const orderRef = yield firestore.collection("orders");
    yield orderRef.doc().set(order);

    yield put(setOrderSuccess());
  } catch (error) {
    yield put(setOrderFailure(error.message));
  }
}

export function* setOrderStart() {
  yield takeLatest(CheckoutActionTypes.SET_ORDER_START, setOrderAsync);
}

export function* checkoutSagas() {
  yield all([call(setOrderStart)]);
}
