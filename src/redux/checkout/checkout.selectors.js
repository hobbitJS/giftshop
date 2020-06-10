import { createSelector } from "reselect";

const selectCheckoutData = (state) => state.checkout;

export const selectCheckoutFormData = createSelector(
  [selectCheckoutData],
  (checkout) => checkout.formData
);
