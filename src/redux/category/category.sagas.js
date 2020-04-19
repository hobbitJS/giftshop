import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore } from "../../firebase/firebase.utils";

import { fetchCategorySuccess, fetchCategoryFailure } from "./category.actions";

import CategoryActionTypes from "./category.types";

export function* fetchCategoryAsync(category) {
  try {
    const categoryRef = firestore
      .collection("categories")
      .doc(`${category.payload}`);
    const snapshot = yield categoryRef.get();
    const itemsFromCategory = yield snapshot.data();

    const convertedData = () => {
      const newData = [];

      for (const key in itemsFromCategory) {
        newData.push(itemsFromCategory[key]);
      }

      return newData;
    };

    const data = convertedData();
    yield put(fetchCategorySuccess(data));
  } catch (error) {
    yield put(fetchCategoryFailure(error.message));
  }
}

export function* fetchCategoryStart() {
  yield takeLatest(
    CategoryActionTypes.FETCH_CATEGORY_START,
    fetchCategoryAsync
  );
}

export function* categorySagas() {
  yield all([call(fetchCategoryStart)]);
}
