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

import {
  showCartDropdown,
  hideCartDropdown,
} from "../../redux/cart/cart.utils";

const Cart = ({
  count,
  isHidden,
  isHiddenTriangle,
  showCartAction,
  hideCartAction,
  showTriangle,
  hideTriangle,
}) => {
  const showCart = () => {
    if (isHiddenTriangle) showTriangle();
    showCartAction();
    showCartDropdown();
  };

  const hideCart = () => {
    hideTriangle();
    hideCartAction();
    hideCartDropdown();
  };

  return (
    <CartContainer>
      <CartIconContainer
        onMouseOver={() => {
          if (!isHidden) return;
          showCart();
        }}
        onMouseLeave={() => hideCart()}
      >
        <CartCounter>{count}</CartCounter>
        <CartIcon className="cart-icon" title="Cart" />
      </CartIconContainer>

      <TriangleContainer
        onMouseOver={() => showCart()}
        onMouseLeave={() => hideCart()}
      >
        <div
          className={`cart-triangle ${
            !isHiddenTriangle ? "visible-triangle" : ""
          }`}
        ></div>
      </TriangleContainer>
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
  showCartAction: () => dispatch(showCart()),
  hideCartAction: () => dispatch(hideCart()),
  showTriangle: () => dispatch(showTriangle()),
  hideTriangle: () => dispatch(hideTriangle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
