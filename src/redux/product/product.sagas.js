import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore } from "../../firebase/firebase.utils";

import {
  fetchProductSuccess,
  fetchProductFailure,
  selectOption,
} from "./product.actions";

import ProductActionTypes from "./product.types";

export function* fetchProductAsync({
  payload: { category, productId, optionFromUrl },
}) {
  try {
    const productRef = firestore.collection("categories").doc(`${category}`);
    const snapshot = yield productRef.get();
    const product = yield snapshot.data()[`${productId}`];

    yield put(fetchProductSuccess(product));

    if (product.defaultOption !== optionFromUrl)
      yield put(selectOption(optionFromUrl));
  } catch (error) {
    yield put(fetchProductFailure(error.message));
  }
}

export function* fetchProductStart() {
  yield takeLatest(ProductActionTypes.FETCH_PRODUCT_START, fetchProductAsync);
}

export function* productSagas() {
  yield all([call(fetchProductStart)]);
}
