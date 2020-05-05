import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore } from "../../firebase/firebase.utils";

import { fetchProductSuccess, fetchProductFailure } from "./product.actions";

import ProductActionTypes from "./product.types";

export function* fetchProductAsync({ payload: { category, productId } }) {
  try {
    const productRef = firestore.collection("categories").doc(`${category}`);

    const snapshot = yield productRef.get();

    const product = yield snapshot.data()[`${productId}`];

    yield put(fetchProductSuccess(product));
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
