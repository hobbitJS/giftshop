import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectQuery,
  selectItemsByQuery,
  selectIsFetchingByQuery,
  selectIsLoadedByQuery,
  selectFilteredOrders,
  selectActiveOrder,
  selectActiveFilter,
} from "../../../redux/orders/orders.selectors";

import {
  changeQuery,
  removeQuery,
  fetchByQueryStart,
  removeItemsByQuery,
  selectFilter,
  selectOptionOfItemByQuery,
  addItemByQuery,
} from "../../../redux/orders/orders.actions";

import {
  SearchPanelContainer,
  SearchPanelHeader,
  RemoveButton,
  ItemsByQueryContainer,
  ItemsByQueryCategory,
  ItemByQueryContainer,
  ItemByQueryTitle,
  ItemByQueryOptions,
  AddItemButton,
} from "./search-panel-orders-page.styles";

import SearchPanel from "../../search-panel/search-panel.component";
import Spinner from "../../spinner/spinner.component";

const SearchPanelOrdersPage = ({
  queryValue,
  changeQuery,
  removeQuery,
  fetchByQuery,
  itemsByQuery,
  removeItemsByQuery,
  isFetchingByQuery,
  isLoadedByQuery,
  orders,
  activeOrder,
  activeFilter,
  selectActiveFilter,
  addItem,
  selectOption,
}) => {
  const areAllArraysEmpty = (obj) =>
    Object.keys(obj).length === 0
      ? true
      : Object.keys(obj).every((key) => obj[key].length === 0)
      ? true
      : false;

  return (
    <SearchPanelContainer>
      <SearchPanelHeader>
        <SearchPanel
          value={queryValue}
          handleChange={(e) => changeQuery(e)}
          handleClear={() => removeQuery()}
          handleSubmit={() => {
            fetchByQuery(queryValue.toUpperCase());

            return Object.keys(itemsByQuery).length !== 0
              ? removeItemsByQuery()
              : null;
          }}
        />
        {!areAllArraysEmpty(itemsByQuery) ? (
          <RemoveButton onClick={() => removeItemsByQuery()}>
            Remove Query Items
          </RemoveButton>
        ) : null}
      </SearchPanelHeader>

      <ItemsByQueryContainer>
        {isFetchingByQuery === true || isLoadedByQuery === false ? (
          <Spinner />
        ) : areAllArraysEmpty(itemsByQuery) ? (
          Object.keys(itemsByQuery).length !== 0 ? (
            <div>
              Hmmm… we have <b>0</b> results for <b>{`“${queryValue}”`}</b>
            </div>
          ) : null
        ) : (
          Object.entries(itemsByQuery).map(([category, items], idx) =>
            !!items.length ? (
              <ItemsByQueryContainer className="items-container" key={idx}>
                <ItemsByQueryCategory>{category}</ItemsByQueryCategory>
                {items.map((item, idx) => (
                  <ItemByQueryContainer key={idx}>
                    <ItemByQueryTitle>
                      <span>Title: {item.title}</span>
                      <span>
                        <b>ID: {item.id}</b>
                      </span>
                    </ItemByQueryTitle>
                    <ItemByQueryOptions
                      value={item.defaultOption}
                      onChange={(e) =>
                        selectOption(item.id, +e.target.value, category)
                      }
                    >
                      {item.options.map((option, idx) => (
                        <option value={idx} key={idx}>
                          {option.attribute}
                        </option>
                      ))}
                    </ItemByQueryOptions>
                    <AddItemButton
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(
                          orders[activeOrder].uid,
                          item,
                          category,
                          activeOrder
                        );
                        selectActiveFilter(activeFilter);
                      }}
                    >
                      Add Item
                    </AddItemButton>
                  </ItemByQueryContainer>
                ))}
              </ItemsByQueryContainer>
            ) : null
          )
        )}
      </ItemsByQueryContainer>
    </SearchPanelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  queryValue: selectQuery,
  itemsByQuery: selectItemsByQuery,
  isFetchingByQuery: selectIsFetchingByQuery,
  isLoadedByQuery: selectIsLoadedByQuery,
  orders: selectFilteredOrders,
  activeOrder: selectActiveOrder,
  activeFilter: selectActiveFilter,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuery: (query) => dispatch(changeQuery(query)),
  removeQuery: () => dispatch(removeQuery()),
  fetchByQuery: (value) => dispatch(fetchByQueryStart(value)),
  removeItemsByQuery: () => dispatch(removeItemsByQuery()),
  selectOption: (itemId, option, category) =>
    dispatch(selectOptionOfItemByQuery(itemId, option, category)),
  selectActiveFilter: (filter) => dispatch(selectFilter(filter)),
  addItem: (uid, item, category, activeOrder) =>
    dispatch(addItemByQuery(uid, item, category, activeOrder)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanelOrdersPage);
