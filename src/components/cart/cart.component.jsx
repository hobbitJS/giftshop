import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsCount,
  selectIsHidden,
} from "../../redux/cart/cart.selectors";

import {
  CartContainer,
  CartIconContainer,
  CartCounter,
  CartItemsContainer,
  CartItem,
} from "./cart.styles";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";

const Cart = ({ cartItems, cartItemsCount, isHidden }) => (
  <CartContainer>
    <CartIconContainer>
      <CartCounter>{cartItemsCount}</CartCounter>
      <CartIcon className="cart-icon" title="Cart" />
    </CartIconContainer>
    {!isHidden ? (
      <CartItemsContainer>
        {cartItems.map((el) => (
          <CartItem>{el.title}</CartItem>
        ))}
      </CartItemsContainer>
    ) : null}
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
  isHidden: selectIsHidden,
});

export default connect(mapStateToProps)(Cart);
