import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore } from "../../firebase/firebase.utils";

// i need same functionality as in search-panel-header ...
import { convertData } from "../search-panel-header/search-panel-header.utils";

import OrdersActionTypes from "./orders.types";

import {
  fetchOrdersSuccess,
  fetchOrdersFailure,
  selectFilter,
  fetchByQuerySuccess,
  fetchByQueryFailure,
  saveOrderToFirebaseSuccess,
  saveOrderToFirebaseFailure,
} from "./orders.actions";

export function* fetchOrdersAsync(category) {
  try {
    const ordersRef = yield firestore.collection("orders");
    const snapshot = yield ordersRef.get();

    const orders = [];

    snapshot.forEach((doc) => {
      return orders.push({
        uid: doc.id,
        data: doc.data(),
      });
    });

    orders.sort((a, b) => b.data.date - a.data.date);

    yield put(fetchOrdersSuccess(orders));

    yield put(selectFilter("all"));
  } catch (error) {
    yield put(fetchOrdersFailure(error.message));
  }
}

export function* fetchOrdersStart() {
  yield takeLatest(OrdersActionTypes.FETCH_ORDERS_START, fetchOrdersAsync);
}

export function* fetchByQueryAsync({ payload }) {
  try {
    const data = {};

    yield firestore
      .collection("categories")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data[doc.id] = doc.data();
        });
      });

    yield put(fetchByQuerySuccess(convertData(data, payload)));
  } catch (error) {
    yield put(fetchByQueryFailure(error.message));
  }
}

export function* fetchByQyeryStart() {
  yield takeLatest(OrdersActionTypes.FETCH_BY_QUERY_START, fetchByQueryAsync);
}

export function* saveOrderToFirebaseAsync({ payload: { uid, data } }) {
  try {
    const orderRef = yield firestore.collection("orders").doc(uid);

    yield orderRef.update(data);
    yield put(saveOrderToFirebaseSuccess());
  } catch (error) {
    yield put(saveOrderToFirebaseFailure(error.message));
  }
}

export function* saveOrderToFirebaseStart() {
  yield takeLatest(
    OrdersActionTypes.SAVE_ORDER_TO_FIREBASE_START,
    saveOrderToFirebaseAsync
  );
}

export function* ordersSagas() {
  yield all([
    call(fetchOrdersStart),
    call(fetchByQyeryStart),
    call(saveOrderToFirebaseStart),
  ]);
}
