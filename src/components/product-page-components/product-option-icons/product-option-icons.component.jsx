import React from "react";
import { connect } from "react-redux";

import {
  selectProductIcon,
  selectBackgroundImage,
} from "../../../redux/product/product.actions";

import {
  ProductOptionIconsContainer,
  OptionIcon,
} from "./product-option-icons.styles";

const ProductOptionIcons = ({
  productItem: { options, selectedOption, selectedProductIcon },
  selectProductIcon,
  selectBackgroundImage,
}) => {
  return (
    <ProductOptionIconsContainer>
      {options[selectedOption].images.small.map((image, idx) => (
        <OptionIcon
          key={idx}
          active={idx === selectedProductIcon}
          image={image}
          onClick={() => {
            selectProductIcon(idx);
            selectBackgroundImage(options[selectedOption].images.big[idx]);
          }}
        />
      ))}
    </ProductOptionIconsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectProductIcon: (idx) => dispatch(selectProductIcon(idx)),
  selectBackgroundImage: (image) => dispatch(selectBackgroundImage(image)),
});

export default connect(null, mapDispatchToProps)(ProductOptionIcons);
