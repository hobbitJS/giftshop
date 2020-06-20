import React, { useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  fetchProductStart,
  selectOption,
  selectBackgroundImage,
  selectProductIcon,
} from "./../../redux/product/product.actions";

import {
  selectProductItem,
  selectIsProductFetching,
  selectIsProductLoaded,
  selectSelectedOption,
} from "./../../redux/product/product.selectors";

import LoadingOverlay from "../../components/loading-overlay/loading-overlay.component";
import CustomTextSpan from "../../components/custom-text-span/custom-text-span.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import SelectedOptionDetails from "../../components/product-page-components/selected-option-details/selected-option-details.component";
import DeliveryInfo from "../../components/delivery-info/delivery-info.component";

import {
  ProductContainer,
  ProductImage,
  ProductOptionIconContainer,
  ProductOptionIcon,
  ProductOptionsContainer,
  ProductOptions,
  ProductOptionContainer,
  ProductOptionImage,
  ProductOptionDescription,
  ProductDetailsSection,
} from "./product.styles";

import {
  addItem,
  showAddItemMessage,
  showCart,
  showTriangle,
} from "../../redux/cart/cart.actions";

import { showCartDropdown } from "../../redux/cart/cart.utils";

const Product = ({
  match,
  history,
  fetchProductStart,
  isFetching,
  isLoaded,
  item,
  selectOption,
  selectBackgroundImage,
  selectProductIcon,
  addItemToCart,
  showCartAction,
  showAddItemMessage,
  showTriangle,
  selectedOption,
}) => {
  const category = match.url.split("/")[2];
  const productId = match.params.productItemId;
  const { pathname } = history.location;

  // return option from url
  const checkOptionFromUrl = useCallback(() => {
    const splittedPath = pathname.split("/");
    return parseInt(splittedPath[splittedPath.length - 1]);
  }, [pathname]);

  useEffect(() => {
    const optionFromUrl = checkOptionFromUrl();

    fetchProductStart(category, productId, optionFromUrl);
  }, [fetchProductStart, category, productId, checkOptionFromUrl, pathname]);

  return (
    <ProductContainer>
      {isLoaded === false || isFetching === true ? (
        <LoadingOverlay />
      ) : (
        <ProductContainer>
          <ProductImage image={item.selectedBackgroundImage}>
            <ProductOptionIconContainer>
              {item.options.length &&
                item.options[selectedOption].images.small.map((el, idx) => (
                  <ProductOptionIcon
                    image={el}
                    key={idx}
                    active={idx === item.selectedProductIcon ? true : false}
                    onClick={() => {
                      selectProductIcon(idx);
                      selectBackgroundImage(
                        item.options[item.selectedOption].images.big[idx]
                      );
                    }}
                  />
                ))}
            </ProductOptionIconContainer>
            <ProductOptionsContainer>
              <CustomTextSpan size={22}>{item.title}</CustomTextSpan>
              <CustomTextSpan
                size={14}
                weight={`bold`}
              >{`ITEM: ${item.id}`}</CustomTextSpan>
              <ProductOptions>
                <CustomTextSpan
                  size={14}
                  weight={`bold`}
                  transform={`uppercase`}
                  margin={`15px 0 5px 0`}
                >
                  Select an option
                </CustomTextSpan>
                {item.options &&
                  item.options.map((option, idx) => (
                    <ProductOptionContainer
                      key={option.title ? option.title : idx}
                      active={idx === item.selectedOption ? true : false}
                      onClick={() => {
                        selectOption(idx);
                        selectBackgroundImage(item.options[idx].images.big[0]);
                        selectProductIcon(0);
                      }}
                    >
                      <ProductOptionImage image={option.images.small[0]} />
                      <ProductOptionDescription>
                        <CustomTextSpan weight={`bold`}>
                          {option.title}
                        </CustomTextSpan>
                        <CustomTextSpan>{option.attribute}</CustomTextSpan>
                        <CustomTextSpan weight={`bold`}>
                          $
                          {option.discountPrice < option.price
                            ? option.discountPrice
                            : option.price}
                        </CustomTextSpan>
                      </ProductOptionDescription>
                    </ProductOptionContainer>
                  ))}

                <CustomButton
                  isText
                  width={`100%`}
                  color={`white`}
                  bgColor={`black`}
                  bgColorHover={`rgba(142,115,41,1)`}
                  onClick={() => {
                    addItemToCart(item, category);
                    showTriangle();
                    showCartAction();
                    showCartDropdown();
                    showAddItemMessage();
                  }}
                >
                  Add To Cart
                </CustomButton>
              </ProductOptions>
            </ProductOptionsContainer>
          </ProductImage>

          <ProductDetailsSection>
            <SelectedOptionDetails
              options={item.options}
              selectedOption={item.selectedOption}
              stems={item.stems}
            />
            <DeliveryInfo />
          </ProductDetailsSection>
        </ProductContainer>
      )}
    </ProductContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  item: selectProductItem,
  isFetching: selectIsProductFetching,
  isLoaded: selectIsProductLoaded,
  selectedOption: selectSelectedOption,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductStart: (category, id, optionFromUrl) =>
    dispatch(fetchProductStart(category, id, optionFromUrl)),
  selectOption: (option) => dispatch(selectOption(option)),
  selectBackgroundImage: (background) =>
    dispatch(selectBackgroundImage(background)),
  selectProductIcon: (icon) => dispatch(selectProductIcon(icon)),
  addItemToCart: (item, category) => dispatch(addItem(item, category)),
  showCartAction: () => dispatch(showCart()),
  showAddItemMessage: () => dispatch(showAddItemMessage()),
  showTriangle: () => dispatch(showTriangle()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Product)
);
