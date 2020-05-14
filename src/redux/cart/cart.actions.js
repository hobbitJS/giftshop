import CartActionTypes from "./cart.types";

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItem = (itemToClear) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: itemToClear,
});

export const showCart = () => ({
  type: CartActionTypes.SHOW_CART,
});

export const hideCart = () => ({
  type: CartActionTypes.HIDE_CART,
});
