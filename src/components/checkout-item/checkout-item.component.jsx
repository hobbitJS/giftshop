import React from "react";

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

const CheckoutItem = ({ item }) => (
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
        <DecrementIcon />
      </ButtonContainer>
      <CustomTextSpan text={item.quantity} weight={`bold`} size={20} />
      <ButtonContainer>
        <IncrementIcon />
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
      <RemoveIcon />
    </RemoveContainer>
  </CheckoutItemContainer>
);

export default CheckoutItem;
