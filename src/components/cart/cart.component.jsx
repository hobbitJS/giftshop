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

import CartDropdown from "./cart-dropdown/cart-dropdown.component";

const Cart = ({
  items,
  count,
  isHidden,
  isHiddenTriangle,
  showCartAction,
  hideCartAction,
  showTriangle,
  hideTriangle,
}) => {
  return (
    <CartContainer>
      <CartIconContainer
        onMouseOver={() => {
          if (!isHidden) return;
          if (isHiddenTriangle) showTriangle();
          showCartAction();
          showCartDropdown();
        }}
        onMouseLeave={() => {
          hideTriangle();
          hideCartAction();
          hideCartDropdown();
        }}
      >
        <CartCounter>{count}</CartCounter>
        <CartIcon className="cart-icon" title="Cart" />
      </CartIconContainer>

      <TriangleContainer
        onMouseOver={() => {
          if (isHiddenTriangle) showTriangle();
          showCartAction();
          showCartDropdown();
        }}
        onMouseLeave={() => {
          hideTriangle();
          hideCartAction();
          hideCartDropdown();
        }}
      >
        <div
          className={`cart-triangle ${
            !isHiddenTriangle ? "visible-triangle" : ""
          }`}
        ></div>
      </TriangleContainer>

      {/* {!isHidden ? <CartDropdown cartItems={items} /> : null} */}
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
