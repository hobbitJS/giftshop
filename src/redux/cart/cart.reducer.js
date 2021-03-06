import CartActionTypes from "./cart.types";

import { addItem, clearItem, subtractItem } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  isHidden: true,
  isHiddenAddItemMessage: true,
  isHiddenTriangle: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };

    case CartActionTypes.SUBTRACT_ITEM:
      return {
        ...state,
        cartItems: subtractItem(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItem(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    case CartActionTypes.SHOW_CART:
      return {
        ...state,
        isHidden: false,
      };

    case CartActionTypes.HIDE_CART:
      return {
        ...state,
        isHidden: true,
      };

    case CartActionTypes.SHOW_ADD_ITEM_MESSAGE:
      return {
        ...state,
        isHiddenAddItemMessage: false,
      };

    case CartActionTypes.HIDE_ADD_ITEM_MESSAGE:
      return {
        ...state,
        isHiddenAddItemMessage: true,
      };

    case CartActionTypes.SHOW_TRIANGLE:
      return {
        ...state,
        isHiddenTriangle: false,
      };

    case CartActionTypes.HIDE_TRIANGLE:
      return {
        ...state,
        isHiddenTriangle: true,
      };

    default:
      return state;
  }
};

export default cartReducer;
