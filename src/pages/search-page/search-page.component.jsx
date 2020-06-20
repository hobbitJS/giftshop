import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { fetchByQueryStart } from "../../redux/search-panel-header/search-panel-header.actions";

import {
  selectSearchPanelHeaderItemsByQuery,
  selectSearchPanelHeaderIsFetching,
  selectSearchPanelHeaderisLoaded,
} from "../../redux/search-panel-header/search-panel.selectors";

import {
  SearchPageContainer,
  SearchPageCategoryContainer,
  SearchPageCategoryTitle,
  SearchPageItemsByCategory,
  SearchPageNoResultMessage,
} from "./search-page.styles";

import LoadingOverlay from "../../components/loading-overlay/loading-overlay.component";
import CustomTextSpan from "../../components/custom-text-span/custom-text-span.component";
import ProductCard from "../../components/product-card/product-card.component";

const SearchPage = ({
  fetchByQueryAsync,
  match,
  itemsByQuery,
  isFetching,
  isLoaded,
}) => {
  const getQuery = useCallback(() => match.params.query, [match]);

  const areAllArraysEmpty = (obj) =>
    Object.keys(obj).every((key) => obj[key].length === 0);

  useEffect(() => {
    fetchByQueryAsync(getQuery());
  }, [fetchByQueryAsync, getQuery]);

  return (
    <SearchPageContainer>
      {isLoaded === false || isFetching === true ? (
        <LoadingOverlay />
      ) : areAllArraysEmpty(itemsByQuery) ? (
        <SearchPageNoResultMessage>
          <CustomTextSpan>
            Hmmm… we have <b>0</b> results for <b>{`“${getQuery()}”`}</b>
          </CustomTextSpan>
        </SearchPageNoResultMessage>
      ) : (
        Object.entries(itemsByQuery).map(([category, items], idx) =>
          !!items.length ? (
            <SearchPageCategoryContainer key={idx}>
              <SearchPageCategoryTitle>{category}</SearchPageCategoryTitle>
              <SearchPageItemsByCategory>
                {items.map((item) => (
                  <ProductCard item={item} key={item.id} category={category} />
                ))}
              </SearchPageItemsByCategory>
            </SearchPageCategoryContainer>
          ) : null
        )
      )}
    </SearchPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsByQuery: selectSearchPanelHeaderItemsByQuery,
  isFetching: selectSearchPanelHeaderIsFetching,
  isLoaded: selectSearchPanelHeaderisLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchByQueryAsync: (value) => dispatch(fetchByQueryStart(value)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPage)
);
