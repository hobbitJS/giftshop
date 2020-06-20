import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore } from "../../firebase/firebase.utils";

import { convertData } from "./search-panel-header.utils";

import SearchPanelHeaderActionTypes from "./search-panel-header.types";

import {
  fetchByQuerySuccess,
  fetchByQueryFailure,
} from "./search-panel-header.actions";

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

export function* fetchByQueryStart() {
  yield takeLatest(
    SearchPanelHeaderActionTypes.FETCH_ITEMS_BY_QUERY_START,
    fetchByQueryAsync
  );
}

export function* searchPanelHeaderSagas() {
  yield all([call(fetchByQueryStart)]);
}
