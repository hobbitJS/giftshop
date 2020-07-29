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

const ProductCard = ({ item, category, history }) => {
  const computedPriceRange = (options) => {
    const standardPrices = [];
    const discountPrices = [];

    for (let i = 0; i < options.length; i++) {
      standardPrices.push(options[i].price);
      discountPrices.push(options[i].discountPrice);
    }

    const deduceRange = (arr) => {
      const min = Math.min(...arr);
      const max = Math.max(...arr);

      return arr.length === 1 ? arr : min === max ? max : [min, max];
    };

    const convertRangeToStr = (range) =>
      isNaN(range) ? range.map((el) => `$${el}`).join(" - ") : `$${range}`;

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
          <React.Fragment>
            <ProductCardPrice discount>
              {convertRangeToStr(discountRange)} SALE
            </ProductCardPrice>
            <ProductCardPrice old>
              {convertRangeToStr(standardRange)}
            </ProductCardPrice>
          </React.Fragment>
        ) : (
          <ProductCardPrice standard>
            {convertRangeToStr(standardRange)}
          </ProductCardPrice>
        )}
      </ProductCardPriceContainer>
    );
  };

  const { image, title, options, id, defaultOption } = item;

  return (
    <ProductCardContainer
      onClick={() => history.push(`/shop/${category}/${id}/${defaultOption}`)}
    >
      <ProductCardImageContainer>
        <ProductCardImage src={image ? image : noImg} alt={title} />
      </ProductCardImageContainer>
      <ProductCardTitle>{title}</ProductCardTitle>
      {computedPriceRange(options)}
    </ProductCardContainer>
  );
};

export default withRouter(ProductCard);
