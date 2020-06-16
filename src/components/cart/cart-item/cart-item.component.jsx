import React from "react";
import { connect } from "react-redux";

import { clearItem } from "../../../redux/cart/cart.actions";

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemQuantityPrice,
  RemoveCartItemContainer,
} from "./cart-item.styles";

import CustomTextSpan from "../../custom-text-span/custom-text-span.component";

import { ReactComponent as RemoveIcon } from "../../../assets/remove-button.svg";

const CartItem = ({ item, clearItem }) => {
  const {
    image,
    title,
    quantity,
    selectedOption: { attribute, price, discountPrice },
  } = item;

  return (
    <CartItemContainer>
      <CartItemImage image={image} />
      <CartItemDetails>
        <CustomTextSpan text={title} size="16" weight="bold" />
        <CustomTextSpan>
          <b>Option: </b>
          {attribute}
        </CustomTextSpan>
        <CartItemQuantityPrice>
          <CustomTextSpan size="16">
            Quantity: <b>{quantity}</b>
          </CustomTextSpan>
          <CustomTextSpan size="16" weight="bold">
            ${(price > discountPrice ? discountPrice : price) * quantity}
          </CustomTextSpan>
        </CartItemQuantityPrice>
      </CartItemDetails>
      <RemoveCartItemContainer onClick={() => clearItem(item)}>
        <RemoveIcon />
      </RemoveCartItemContainer>
    </CartItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
