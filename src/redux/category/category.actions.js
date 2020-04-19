import CategoryActionTypes from "./category.types";

export const fetchCategoryStart = (categoryName) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_START,
  payload: categoryName,
});

export const fetchCategorySuccess = (itemsFromCategory) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCES,
  payload: itemsFromCategory,
});

export const fetchCategoryFailure = (errorMessage) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
  payload: errorMessage,
});
