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

import { CategoryContainer } from "./category.styles";
import ProductItem from "../../components/product-item/product-item.component";
import LoadingOverlay from "../../components/loading-overlay/loading-overlay.component";

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
    <CategoryContainer>
      <Route exact path={`${match.path}`}>
        {isLoaded === false || isFetching === true ? (
          <LoadingOverlay />
        ) : (
          itemsFromCategory.map((el) => <ProductItem item={el} key={el.id} />)
        )}
      </Route>
      <Route
        path={`${match.url}/:productItemId`}
        render={() => <div>sasa</div>}
      />
    </CategoryContainer>
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
