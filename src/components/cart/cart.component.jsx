import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsCount,
  selectIsHidden,
  selectIsHiddenTriangle,
} from "../../redux/cart/cart.selectors";

import {
  showCart,
  hideCart,
  showTriangle,
  hideTriangle,
} from "../../redux/cart/cart.actions";

import {
  CartContainer,
  CartIconContainer,
  CartCounter,
  TriangleContainer,
} from "./cart.styles";

import { ReactComponent as CartIcon } from "../../assets/cart.svg";

import CartDropdown from "./cart-dropdown/cart-dropdown.component";

const Cart = ({
  items,
  count,
  isHidden,
  isHiddenTriangle,
  showCart,
  hideCart,
  showTriangle,
  hideTriangle,
}) => {
  return (
    <CartContainer>
      <CartIconContainer
        onMouseOver={() => {
          if (isHiddenTriangle) showTriangle();
          return isHidden ? showCart() : null;
        }}
        onMouseLeave={() => {
          hideTriangle();
        }}
      >
        <CartCounter>{count}</CartCounter>
        <CartIcon className="cart-icon" title="Cart" />
      </CartIconContainer>

      <TriangleContainer
        onMouseOver={() => (isHiddenTriangle ? showTriangle() : null)}
        onMouseLeave={() => hideTriangle()}
      >
        <div
          className={`cart-triangle ${
            !isHiddenTriangle ? "visible-triangle" : ""
          }`}
        ></div>
      </TriangleContainer>

      {!isHidden ? <CartDropdown cartItems={items} /> : null}
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  count: selectCartItemsCount,
  isHidden: selectIsHidden,
  isHiddenTriangle: selectIsHiddenTriangle,
});

const mapDispatchToProps = (dispatch) => ({
  showCart: () => dispatch(showCart()),
  hideCart: () => dispatch(hideCart()),
  showTriangle: () => dispatch(showTriangle()),
  hideTriangle: () => dispatch(hideTriangle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
