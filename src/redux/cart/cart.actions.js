import CartActionTypes from "./cart.types";

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

// export const removeItemFromCart = (itemId) => ({
//   type: CartActionTypes.REMOVE_ITEM_FROM_CART,
//   payload: itemId,
// });

// export const incQuantity = (itemId) => ({
//   type: CartActionTypes.INC_QUANTITY,
//   payload: itemId,
// });

// export const decQuantity = (itemId) => ({
//   type: CartActionTypes.DEC_QUANTITY,
//   payload: itemId,
// });
