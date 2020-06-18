import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  subtractItem,
  addItem,
  clearItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  ItemDescription,
  QuantityContainer,
  PriceContainer,
  RemoveContainer,
} from "./checkout-item.styles";

import CustomTextSpan from "../custom-text-span/custom-text-span.component";

import { ReactComponent as DecrementIcon } from "../../assets/decrement-button.svg";
import { ReactComponent as IncrementIcon } from "../../assets/increment-button.svg";
import { ReactComponent as RemoveIcon } from "../../assets/remove-button.svg";

const CheckoutItem = ({ item, subtractItem, addItem, clearItem, history }) => {
  const {
    id,
    title,
    category,
    optionNumber,
    selectedOption: { attribute, images, price, discountPrice },
  } = item;

  const linkToItem = () =>
    history.push(`/shop/${category}/${id}/${optionNumber}`);

  return (
    <CheckoutItemContainer>
      <ImageContainer onClick={() => linkToItem()}>
        <Image img={images.big[0]} />
      </ImageContainer>
      <ItemDescription onClick={() => linkToItem()}>
        <CustomTextSpan text={title} weight={"bold"} />
        <CustomTextSpan>
          <b>Option:</b> {attribute}
        </CustomTextSpan>
      </ItemDescription>
      <QuantityContainer>
        <DecrementIcon onClick={() => subtractItem(item)} />
        <CustomTextSpan text={item.quantity} weight={`bold`} size={20} />
        <IncrementIcon onClick={() => addItem(item)} />
      </QuantityContainer>
      <PriceContainer>
        <CustomTextSpan
          text={`$${price > discountPrice ? discountPrice : price}`}
          weight={`bold`}
          size={20}
        />
      </PriceContainer>
      <RemoveContainer>
        <RemoveIcon onClick={() => clearItem(item)} />
      </RemoveContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  subtractItem: (item) => dispatch(subtractItem(item)),
  addItem: (item) => dispatch(addItem(item, "", true)),
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(CheckoutItem));
