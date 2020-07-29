import React, { useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchProductStart } from "./../../redux/product/product.actions";

import {
  selectProductItem,
  selectIsProductFetching,
  selectIsProductLoaded,
} from "./../../redux/product/product.selectors";

import LoadingOverlay from "../../components/loading-overlay/loading-overlay.component";

import SelectedOptionDetails from "../../components/product-page-components/selected-option-details/selected-option-details.component";
import DeliveryInfo from "../../components/delivery-info/delivery-info.component";

import {
  ProductContainer,
  ProductImage,
  ProductDetailsSection,
} from "./product.styles";

import ProductOptionIcons from "../../components/product-page-components/product-option-icons/product-option-icons.component";
import ProductOptions from "../../components/product-page-components/product-options/product-options.component";

const Product = ({
  match,
  history,
  fetchProductStart,
  isFetching,
  isLoaded,
  item,
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
          <ProductImage
            image={item.selectedBackgroundImage}
            category={category}
          >
            <ProductOptionIcons productItem={item} />

            <ProductOptions productItem={item} category={category} />
          </ProductImage>

          {
            // TO REFACTOR
          }

          <ProductDetailsSection itemsCount={item.options.length}>
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductStart: (category, id, optionFromUrl) =>
    dispatch(fetchProductStart(category, id, optionFromUrl)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Product)
);
