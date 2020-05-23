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
  selectSubtotal,
  selectIsHiddenTriangle,
  selectIsHidden,
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

import CustomTextSpan from "../../custom-text-span/custom-text-span.component";
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

  render() {
    const {
      cartItems,
      count,
      isHiddenMessage,
      subtotal,
      hideCartAction,
      hideAddItemMessage,
      showTriangle,
      hideTriangle,
      showCartAction,
    } = this.props;
    return (
      <CartDropdownContainer
        id="cart-dropdown"
        onMouseEnter={() => {
          showTriangle();
          showCartAction();
          showCartDropdown();
        }}
        onMouseLeave={() => {
          hideTriangle();
          hideAddItemMessage();
          hideCartAction();
          hideCartDropdown();
        }}
      >
        <CartDropdownHeader>
          <CartDropdownSubheader>
            <CustomTextSpan>
              <b>My Bag, </b>
              {count === 0
                ? `is empty`
                : count > 1
                ? `${count} items`
                : `1 item`}
            </CustomTextSpan>
            <XButton
              onClick={() => {
                hideTriangle();
                hideAddItemMessage();
                hideCartAction();
                hideCartDropdown();
              }}
            />
          </CartDropdownSubheader>
          {!isHiddenMessage ? (
            <AddItemMessageContainer>
              <Check />
              <CustomTextSpan text="It's in the bag" />
            </AddItemMessageContainer>
          ) : null}
        </CartDropdownHeader>

        {cartItems.map((cartItem, idx) => (
          <CartItem item={cartItem} key={idx} />
        ))}

        <CartSubtotalContainer>
          <CustomTextSpan text={`Sub-total`} />
          <CustomTextSpan text={`$${subtotal}`} />
        </CartSubtotalContainer>
        {count > 0 ? (
          <CustomButton
            isText
            width={`70%`}
            color={`white`}
            bgColor={`black`}
            bgColorHover={`rgba(142,115,41,1)`}
            onClick={() => {
              hideTriangle();
              hideAddItemMessage();
              hideCartAction();
              hideCartDropdown();
            }}
          >
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
  subtotal: selectSubtotal,
});

const mapDispatchToProps = (dispatch) => ({
  showCartAction: () => dispatch(showCart()),
  hideCartAction: () => dispatch(hideCart()),
  hideAddItemMessage: () => dispatch(hideAddItemMessage()),
  showTriangle: () => dispatch(showTriangle()),
  hideTriangle: () => dispatch(hideTriangle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
