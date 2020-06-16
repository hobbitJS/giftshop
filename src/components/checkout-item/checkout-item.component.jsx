import React from "react";
import { connect } from "react-redux";

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
  ButtonContainer,
  PriceContainer,
  RemoveContainer,
} from "./checkout-item.styles";

import CustomTextSpan from "../custom-text-span/custom-text-span.component";

import { ReactComponent as DecrementIcon } from "../../assets/decrement-button.svg";
import { ReactComponent as IncrementIcon } from "../../assets/increment-button.svg";
import { ReactComponent as RemoveIcon } from "../../assets/remove-button.svg";

const CheckoutItem = ({ item, subtractItem, addItem, clearItem }) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <Image img={item.selectedOption.images.big[0]} />
    </ImageContainer>
    <ItemDescription>
      <CustomTextSpan text={item.title} weight={"bold"} />
      <CustomTextSpan>
        <b>Option:</b> {item.selectedOption.attribute}
      </CustomTextSpan>
    </ItemDescription>
    <QuantityContainer>
      <ButtonContainer>
        <DecrementIcon onClick={() => subtractItem(item)} />
      </ButtonContainer>
      <CustomTextSpan text={item.quantity} weight={`bold`} size={20} />
      <ButtonContainer>
        <IncrementIcon onClick={() => addItem(item)} />
      </ButtonContainer>
    </QuantityContainer>
    <PriceContainer>
      <CustomTextSpan
        text={`$${
          item.selectedOption.price > item.selectedOption.discountPrice
            ? item.selectedOption.discountPrice
            : item.selectedOption.price
        }`}
        weight={`bold`}
        size={20}
      />
    </PriceContainer>
    <RemoveContainer>
      <RemoveIcon onClick={() => clearItem(item)} />
    </RemoveContainer>
  </CheckoutItemContainer>
);

const mapDispatchToProps = (dispatch) => ({
  subtractItem: (item) => dispatch(subtractItem(item)),
  addItem: (item) => dispatch(addItem(item, "", true)),
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
