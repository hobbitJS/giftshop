import CartActionTypes from "./cart.types";

import { addItem, clearItem } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  isHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {};

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

    case CartActionTypes.HIDE_CART: {
      return {
        ...state,
        isHidden: true,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
