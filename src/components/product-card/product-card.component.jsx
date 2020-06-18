import React from "react";
import { withRouter } from "react-router-dom";

import noImg from "../../assets/no-product-image.jpg";

import {
  ProductCardContainer,
  ProductCardImageContainer,
  ProductCardImage,
  ProductCardTitle,
  ProductCardPriceContainer,
  ProductCardPrice,
} from "./product-card.styles";

import CustomButton from "../custom-button/custom-button.component";

const ProductCard = ({ item, match, history }) => {
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
      <ProductCardPriceContainer>
        {isOnSale ? (
          <ProductCardPrice discount>
            {convertRangeToStr(discountRange)} SALE
          </ProductCardPrice>
        ) : (
          <ProductCardPrice standard>
            {convertRangeToStr(standardRange)}
          </ProductCardPrice>
        )}

        {isOnSale ? (
          <ProductCardPrice old>
            {convertRangeToStr(standardRange)}
          </ProductCardPrice>
        ) : null}
      </ProductCardPriceContainer>
    );
  };

  const { image, title, options, id, defaultOption } = item;

  return (
    <ProductCardContainer onClick={() => history.push(`${match.url}/${id}/${defaultOption}`)}>
      <ProductCardImageContainer>
        <ProductCardImage src={image ? image : noImg} alt={title} />
        <CustomButton isIcon addToCartImg isAbsolute title="Add to Cart" />
      </ProductCardImageContainer>
      <ProductCardTitle>{title}</ProductCardTitle>
      {computedPriceRange(options)}
    </ProductCardContainer>
  );
};

export default withRouter(ProductCard);
