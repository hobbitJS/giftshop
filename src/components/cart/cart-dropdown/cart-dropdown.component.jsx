import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import {
  hideCart,
  hideAddItemMessage,
  hideTriangle,
  showTriangle,
  showCart,
} from "../../../redux/cart/cart.actions";

import {
  selectCartItemsCount,
  selectIsHiddenAddMessage,
  selectIsHiddenTriangle,
  selectIsHidden,
  selectTotalToPay,
} from "../../../redux/cart/cart.selectors";

import {
  CartDropdownContainer,
  CartDropdownHeader,
  CartDropdownSubheader,
  AddItemMessageContainer,
  CartSubtotalContainer,
} from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item.component";

import { ReactComponent as XButton } from "../../../assets/x-button.svg";
import { ReactComponent as Check } from "../../../assets/check.svg";

import CustomButton from "../../custom-button/custom-button.component";

import {
  showCartDropdown,
  hideCartDropdown,
} from "../../../redux/cart/cart.utils";

class CartDropdown extends React.Component {
  componentCleanup = () => {
    const { hideTriangle } = this.props;

    hideTriangle();
  };

  componentDidMount() {
    hideCartDropdown();

    window.addEventListener("beforeunload", this.componentCleanup);
  }

  componentWillUnmount() {
    this.componentCleanup();

    window.removeEventListener("beforeunload", this.componentCleanup);
  }

  show() {
    const { showTriangle, showCartAction } = this.props;

    showTriangle();
    showCartAction();
    showCartDropdown();
  }

  hide() {
    const { hideTriangle, hideAddItemMessage, hideCartAction } = this.props;

    hideTriangle();
    hideAddItemMessage();
    hideCartAction();
    hideCartDropdown();
  }

  render() {
    const { cartItems, count, isHiddenMessage, subtotal } = this.props;

    return (
      <CartDropdownContainer
        id="cart-dropdown"
        onMouseEnter={() => this.show()}
        onMouseLeave={() => this.hide()}
      >
        <CartDropdownHeader>
          <CartDropdownSubheader>
            <span>
              <b>My Bag, </b>
              {count === 0
                ? `is empty`
                : count > 1
                ? `${count} items`
                : `1 item`}
            </span>
            <XButton onClick={() => this.hide()} />
          </CartDropdownSubheader>

          {!isHiddenMessage ? (
            <AddItemMessageContainer>
              <Check />
              <span>It's in the bag</span>
            </AddItemMessageContainer>
          ) : null}
        </CartDropdownHeader>

        {cartItems.map((cartItem, idx) => (
          <CartItem item={cartItem} key={idx} />
        ))}

        <CartSubtotalContainer>
          <span>Sub-total:</span>
          <span>{`$${subtotal}`}</span>
        </CartSubtotalContainer>
        {count > 0 ? (
          <CustomButton blackButton onClick={() => this.hide()}>
            <Link to="/checkout">GO TO CHECKOUT</Link>
          </CustomButton>
        ) : null}
      </CartDropdownContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  count: selectCartItemsCount,
  isHidden: selectIsHidden,
  isHiddenTriangle: selectIsHiddenTriangle,
  isHiddenMessage: selectIsHiddenAddMessage,
  subtotal: selectTotalToPay,
});

const mapDispatchToProps = (dispatch) => ({
  showCartAction: () => dispatch(showCart()),
  hideCartAction: () => dispatch(hideCart()),
  hideAddItemMessage: () => dispatch(hideAddItemMessage()),
  showTriangle: () => dispatch(showTriangle()),
  hideTriangle: () => dispatch(hideTriangle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
