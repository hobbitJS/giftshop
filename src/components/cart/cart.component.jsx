import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsCount,
  selectIsHidden,
} from "../../redux/cart/cart.selectors";

import { showCart } from "../../redux/cart/cart.actions";

import { CartContainer, CartIconContainer, CartCounter } from "./cart.styles";

import { ReactComponent as CartIcon } from "../../assets/cart.svg";

import CartDropdown from "./cart-dropdown/cart-dropdown.component";

const Cart = ({ items, count, isHidden, showCart }) => (
  <CartContainer>
    <CartIconContainer onClick={() => showCart()}>
      <CartCounter>{count}</CartCounter>
      <CartIcon className="cart-icon" title="Cart" />
    </CartIconContainer>
    {!isHidden ? <CartDropdown cartItems={items} /> : null}
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  count: selectCartItemsCount,
  isHidden: selectIsHidden,
});

const mapDispatchToProps = (dispatch) => ({
  showCart: () => dispatch(showCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
