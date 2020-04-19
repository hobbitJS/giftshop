import React from "react";
import { withRouter } from "react-router-dom";

import noImg from "../../assets/no-product-image.jpg";

import {
  ProductItemContainer,
  ProductItemImageContainer,
  ProductItemImage,
  ProductItemTitle,
  ProductItemPriceContainer,
  ProductItemPrice,
} from "./product-item.styles";

import CustomButton from "../custom-button/custom-button.component";

const ProductItem = ({ item, match, history }) => {
  const computedPriceRange = (options) => {
    const standardPrices = [];
    const discountPrices = [];

    for (let i = 0; i < options.length; i++) {
      standardPrices.push(options[i].price);
      discountPrices.push(options[i].discountPrice);
    }

    const deduceRange = (arr) =>
      arr.length === 1 ? arr : [Math.min(...arr), Math.max(...arr)];

    const convertRangeToStr = (arr) => arr.map((el) => `$${el}`).join(" - ");

    const discountRange = deduceRange(discountPrices);
    const standardRange = deduceRange(standardPrices);

    let isOnSale = false;

    for (let i = 0; i < standardPrices.length; i++) {
      if (standardPrices[i] !== discountPrices[i]) {
        isOnSale = true;
        break;
      }
    }

    return (
      <ProductItemPriceContainer>
        {isOnSale ? (
          <ProductItemPrice discount>
            {convertRangeToStr(discountRange)} SALE
          </ProductItemPrice>
        ) : (
          <ProductItemPrice standard>
            {convertRangeToStr(standardRange)}
          </ProductItemPrice>
        )}

        {isOnSale ? (
          <ProductItemPrice old>
            {convertRangeToStr(standardRange)}
          </ProductItemPrice>
        ) : null}
      </ProductItemPriceContainer>
    );
  };

  const { image, title, options, id } = item;

  return (
    <ProductItemContainer onClick={() => history.push(`${match.url}/${id}`)}>
      <ProductItemImageContainer>
        <ProductItemImage src={image ? image : noImg} alt={title} />
        <CustomButton isIcon addToCartImg isAbsolute title="Add to Cart" />
      </ProductItemImageContainer>
      <ProductItemTitle>{title}</ProductItemTitle>
      {computedPriceRange(options)}
    </ProductItemContainer>
  );
};

export default withRouter(ProductItem);
