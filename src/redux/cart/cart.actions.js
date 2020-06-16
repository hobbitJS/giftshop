import CartActionTypes from "./cart.types";

export const addItem = (item, category, addItemFromCheckout) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: { ...item, category, addItemFromCheckout },
});

export const subtractItem = (itemToSubtract) => ({
  type: CartActionTypes.SUBTRACT_ITEM,
  payload: itemToSubtract,
});

export const clearItem = (itemToClear) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: itemToClear,
});

export const clearItems = () => ({
  type: CartActionTypes.CLEAR_ITEMS,
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

export const showTriangle = () => ({
  type: CartActionTypes.SHOW_TRIANGLE,
});

export const hideTriangle = () => ({
  type: CartActionTypes.HIDE_TRIANGLE,
});
