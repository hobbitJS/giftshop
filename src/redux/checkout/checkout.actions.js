import CheckoutActionTypes from "./checkout.types";

export const updateCheckoutFormField = (field, value) => ({
  type: CheckoutActionTypes.UPDATE_CHECKOUT_FORM_FIELD,
  payload: { field, value },
});

export const clearCheckoutForm = () => ({
  type: CheckoutActionTypes.CLEAR_CHECKOUT_FORM,
});

export const setOrderStart = (data) => ({
  type: CheckoutActionTypes.SET_ORDER_START,
  payload: data,
});

export const setOrderSuccess = () => ({
  type: CheckoutActionTypes.SET_ORDER_SUCCESS,
});

export const setOrderFailure = (error) => ({
  type: CheckoutActionTypes.SET_ORDER_FAILURE,
  payload: error,
});

export const showCheckoutModal = () => ({
  type: CheckoutActionTypes.SHOW_CHECKOUT_MODAL,
});

export const hideCheckoutModal = () => ({
  type: CheckoutActionTypes.HIDE_CHECKOUT_MODAL,
});
