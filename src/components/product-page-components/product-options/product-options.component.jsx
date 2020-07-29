import React from "react";
import { connect } from "react-redux";

import {
  selectOption,
  selectBackgroundImage,
  selectProductIcon,
} from "../../../redux/product/product.actions";

import {
  addItem,
  showTriangle,
  showCart,
  showAddItemMessage,
} from "../../../redux/cart/cart.actions";

import { showCartDropdown } from "../../../redux/cart/cart.utils";

import {
  ProductOptionsContainer,
  OptionsContainer,
} from "./product-options.styles";

import ProductOption from "../product-option/product-option.component";

import CustomTextSpan from "../../custom-text-span/custom-text-span.component";
import CustomButton from "../../custom-button/custom-button.component";

const ProductOptions = ({
  productItem,
  category,
  selectOption,
  selectBackgroundImage,
  selectProductIcon,
  addItemToCart,
  showTriangle,
  showCartAction,
  showAddItemMessage,
}) => {
  const { title, id, options, selectedOption } = productItem;
  return (
    <ProductOptionsContainer optionsCount={options.length}>
      <CustomTextSpan size={22} text={title} style={{ marginTop: `15px` }} />
      <CustomTextSpan size={14} weight={`bold`} text={`ITEM: ${id}`} />
      {options.length > 1 ? (
        <CustomTextSpan
          text={"SELECT AN OPTION"}
          weight={"bold"}
          style={{ marginTop: `15px` }}
        />
      ) : null}
      <OptionsContainer>
        {options.map((option, idx) => (
          <ProductOption
            key={idx}
            option={option}
            active={idx === selectedOption}
            handleClick={() => {
              selectOption(idx);
              selectBackgroundImage(options[idx].images.big[0]);
              selectProductIcon(0);
            }}
          />
        ))}
      </OptionsContainer>
      <CustomButton
        blackButton
        width={100}
        text={"Add To Cart"}
        onClick={() => {
          addItemToCart(productItem, category);
          showTriangle();
          showCartAction();
          showAddItemMessage();
          showCartDropdown();
        }}
      />
    </ProductOptionsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectOption: (option) => dispatch(selectOption(option)),
  selectBackgroundImage: (image) => dispatch(selectBackgroundImage(image)),
  selectProductIcon: (icon) => dispatch(selectProductIcon(icon)),
  addItemToCart: (item, category) => dispatch(addItem(item, category)),
  showTriangle: () => dispatch(showTriangle()),
  showCartAction: () => dispatch(showCart()),
  showAddItemMessage: () => dispatch(showAddItemMessage()),
});

export default connect(null, mapDispatchToProps)(ProductOptions);
