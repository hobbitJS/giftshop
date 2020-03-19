import React from "react";

import { CartContainer, CartCounter } from "./cart.styles";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";

const Cart = () => (
  <CartContainer>
    <CartCounter>0</CartCounter>
    <CartIcon className="cart-icon" />
  </CartContainer>
);

export default Cart;
