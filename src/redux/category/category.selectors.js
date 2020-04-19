import { createSelector } from "reselect";

const selectCategory = (state) => state.category;

export const selectItemsFromCategory = createSelector(
  [selectCategory],
  (category) => category.itemsFromCategory
);

export const selectIsCategoryFetching = createSelector(
  [selectCategory],
  (category) => category.isFetching
);

export const selectIsCategoryLoaded = createSelector(
  [selectCategory],
  (category) => !!category.itemsFromCategory
);
