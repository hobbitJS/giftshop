import CartActionTypes from "./cart.types";

import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  isHidden: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
