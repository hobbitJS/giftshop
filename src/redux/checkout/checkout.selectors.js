import { createSelector } from "reselect";

const selectCheckoutData = (state) => state.checkout;

export const selectCheckoutFormData = createSelector(
  [selectCheckoutData],
  (checkout) => checkout.formData
);

export const selectIsLoading = createSelector(
  [selectCheckoutData],
  (checkout) => checkout.isLoading
);

export const selectError = createSelector(
  [selectCheckoutData],
  (checkout) => checkout.error
);

export const selectShowCheckoutModal = createSelector(
  [selectCheckoutData],
  (checkout) => checkout.showCheckoutModal
);
