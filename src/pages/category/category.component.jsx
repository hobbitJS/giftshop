import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCategoryStart } from "../../redux/category/category.actions";

import {
  selectIsCategoryFetching,
  selectItemsFromCategory,
  selectIsCategoryLoaded,
} from "../../redux/category/category.selectors";

import { CategoryPageContainer, CategoryContainer } from "./category.styles";
import ProductCard from "../../components/product-card/product-card.component";
import LoadingOverlay from "../../components/loading-overlay/loading-overlay.component";
import Product from "../../pages/product/product.component";

const Category = ({
  match,
  fetchCategoryStart,
  itemsFromCategory,
  isFetching,
  isLoaded,
}) => {
  const { categoryName } = match.params;

  useEffect(() => {
    fetchCategoryStart(categoryName);
  }, [fetchCategoryStart, categoryName]);

  return (
    <CategoryPageContainer>
      <CategoryContainer>
        <Route exact path={`${match.path}`}>
          {isLoaded === false || isFetching === true ? (
            <LoadingOverlay />
          ) : (
            itemsFromCategory.map((el) => (
              <ProductCard item={el} category={categoryName} key={el.id} />
            ))
          )}
        </Route>
      </CategoryContainer>
      <Route path={`${match.url}/:productItemId`} component={Product} />
    </CategoryPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsFromCategory: selectItemsFromCategory,
  isFetching: selectIsCategoryFetching,
  isLoaded: selectIsCategoryLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategoryStart: (categoryName) =>
    dispatch(fetchCategoryStart(categoryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
