import ProductActionTypes from "./product.types";

export const fetchProductStart = (category, productId, optionFromUrl) => ({
  type: ProductActionTypes.FETCH_PRODUCT_START,
  payload: { category, productId, optionFromUrl },
});

export const fetchProductSuccess = (product) => ({
  type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProductFailure = (error) => ({
  type: ProductActionTypes.FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const selectOption = (option) => ({
  type: ProductActionTypes.SELECT_OPTION,
  payload: option,
});

export const selectProductIcon = (icon) => ({
  type: ProductActionTypes.SELECT_PRODUCT_ICON,
  payload: icon,
});

export const selectBackgroundImage = (background) => ({
  type: ProductActionTypes.SELECT_BACKGROUND_IMAGE,
  payload: background,
});

export const showDeliveryDetails = () => ({
  type: ProductActionTypes.SHOW_DELIVERY_DETAILS,
});

export const showSubstitutionPolicy = () => ({
  type: ProductActionTypes.SHOW_SUBSTITUTION_POLICY,
});

export const hideDeliveryDetails = () => ({
  type: ProductActionTypes.HIDE_DELIVERY_DETAILS,
});

export const hideSubstitutionPolicy = () => ({
  type: ProductActionTypes.HIDE_SUBSTITUTION_POLICY,
});
