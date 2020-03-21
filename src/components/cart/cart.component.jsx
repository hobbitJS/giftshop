import React from "react";

import { CartContainer, CartCounter } from "./cart.styles";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";

const Cart = () => (
  <CartContainer>
    <CartCounter>14</CartCounter>
    <CartIcon className="cart-icon" title="Cart" />
  </CartContainer>
);

export default Cart;
