import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

const CartItem = ({ item, clearItem, history }) => {
  const {
    id,
    category,
    image,
    title,
    quantity,
    optionNumber,
    selectedOption: { attribute, price, discountPrice },
  } = item;

  const linkToItem = () => {
    history.push(`/shop/${category}/${id}/${optionNumber}`);
    console.log(history);
  };

  return (
    <CartItemContainer>
      <CartItemImage image={image} onClick={() => linkToItem()} />
      <CartItemDetails onClick={() => linkToItem()}>
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

export default withRouter(connect(null, mapDispatchToProps)(CartItem));
