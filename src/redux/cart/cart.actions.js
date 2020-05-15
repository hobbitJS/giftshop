import CartActionTypes from "./cart.types";

export const addItem = (item, category) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: { ...item, category },
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

export const showAddItemMessage = () => ({
  type: CartActionTypes.SHOW_ADD_ITEM_MESSAGE,
});

export const hideAddItemMessage = () => ({
  type: CartActionTypes.HIDE_ADD_ITEM_MESSAGE,
});
