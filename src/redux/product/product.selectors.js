import { createSelector } from "reselect";

const selectProduct = (state) => state.product;

export const selectProductItem = createSelector(
  [selectProduct],
  (product) => product.item
);

export const selectIsProductFetching = createSelector(
  [selectProduct],
  (product) => product.isFetching
);

export const selectIsProductLoaded = createSelector(
  [selectProduct],
  (product) => !!product.item
);

export const selectShowDeliveryDetails = createSelector(
  [selectProduct],
  (product) => product.isShownDeliveryDetails
);

export const selectShowSubstitutionPolicy = createSelector(
  [selectProduct],
  (product) => product.isShownSubstitutionPolicy
);

export const selectSelectedOption = createSelector(
  [selectProductItem],
  (item) => item.selectedOption
);
