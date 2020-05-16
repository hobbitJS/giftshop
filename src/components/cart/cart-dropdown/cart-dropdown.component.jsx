import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import {
  hideCart,
  hideAddItemMessage,
  hideTriangle,
  showTriangle,
} from "../../../redux/cart/cart.actions";

import {
  selectCartItemsCount,
  selectIsHiddenAddMessage,
  selectSubtotal,
  selectIsHiddenTriangle,
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

class CartDropdown extends React.Component {
  componentWillUnmount() {
    const { isHiddenMessage, hideAddItemMessage } = this.props;

    if (!isHiddenMessage) hideAddItemMessage();
  }

  render() {
    const {
      cartItems,
      count,
      isHiddenMessage,
      subtotal,
      hideCart,
      isHiddenTriangle,
      showTriangle,
      hideTriangle,
    } = this.props;
    return (
      <CartDropdownContainer
        onMouseOver={() => (isHiddenTriangle ? showTriangle() : "")}
        onMouseLeave={() => hideTriangle()}
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
                hideCart();
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
  isHiddenTriangle: selectIsHiddenTriangle,
  isHiddenMessage: selectIsHiddenAddMessage,
  subtotal: selectSubtotal,
});

const mapDispatchToProps = (dispatch) => ({
  hideCart: () => dispatch(hideCart()),
  hideAddItemMessage: () => dispatch(hideAddItemMessage()),
  showTriangle: () => dispatch(showTriangle()),
  hideTriangle: () => dispatch(hideTriangle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
