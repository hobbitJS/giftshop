import React from "react";

import {
  ProductOptionContainer,
  OptionImage,
  OptionDescription,
  PriceContainer,
  RegularPrice,
  DiscountPrice,
} from "./product-option.styles";

import CustomTextSpan from "../../custom-text-span/custom-text-span.component";

const ProductOption = ({
  option: { title, attribute, price, discountPrice, images },
  active,
  handleClick,
}) => (
  <ProductOptionContainer active={active} onClick={() => handleClick()}>
    <OptionImage image={images.small[0]} />
    <OptionDescription>
      {title ? <CustomTextSpan text={title} weight={"bold"} /> : null}
      {attribute ? <CustomTextSpan text={attribute} /> : null}
      <PriceContainer>
        {discountPrice < price ? (
          <React.Fragment>
            <DiscountPrice>${discountPrice}</DiscountPrice>
            <RegularPrice isOnSale>${price}</RegularPrice>
          </React.Fragment>
        ) : (
          <RegularPrice>${price}</RegularPrice>
        )}
      </PriceContainer>
    </OptionDescription>
  </ProductOptionContainer>
);

export default ProductOption;
