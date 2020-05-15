import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { hideCart, hideAddItemMessage } from "../../../redux/cart/cart.actions";

import {
  selectCartItemsCount,
  selectIsHiddenAddMessage,
} from "../../../redux/cart/cart.selectors";

import {
  CartDropdownContainer,
  CartDropdownHeader,
  CartDropdownSubheader,
  AddItemMessageContainer,
} from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item.component";

import { ReactComponent as XButton } from "../../../assets/x-button.svg";
import { ReactComponent as Check } from "../../../assets/check.svg";

import CustomTextSpan from "../../custom-text-span/custom-text-span.component";
import CustomButton from "../../custom-button/custom-button.component";

class CartDropdown extends React.Component {
  componentWillUnmount() {
    this.props.hideAddItemMessage();
  }

  render() {
    const { cartItems, count, isHiddenMessage, hideCart } = this.props;
    return (
      <CartDropdownContainer>
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
            <XButton onClick={() => hideCart()} />
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
        {/*SUBTOTAL*/}

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
  isHiddenMessage: selectIsHiddenAddMessage,
});

const mapDispatchToProps = (dispatch) => ({
  hideCart: () => dispatch(hideCart()),
  hideAddItemMessage: () => dispatch(hideAddItemMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
