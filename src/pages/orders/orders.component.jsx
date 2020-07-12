import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  fetchOrdersStart,
  selectFilter,
  selectOrder,
  changeOrderStatus,
  changeUserInfoField,
  incrementItem,
  decrementItem,
  removeItem,
  changeQuery,
  removeQuery,
  fetchByQueryStart,
  removeItemsByQuery,
  selectOptionOfItemByQuery,
  addItemByQuery,
} from "../../redux/orders/orders.actions";

import {
  selectActiveFilter,
  selectActiveOrder,
  selectFilteredOrders,
  selectIsFetching,
  selectIsLoaded,
  selectQuery,
  selectIsFetchingByQuery,
  selectIsLoadedByQuery,
  selectItemsByQuery,
} from "../../redux/orders/orders.selectors";

import {
  OrdersContentContainer,
  OrdersFiltersContainer,
  OrdersFilter,
  BriefOrdersContainer,
  BriefOrder,
  OrderDetailsContainer,
  OrderBadge,
  OrderDateAndStatusContainer,
  OrderDate,
  OrderStatus,
  UserInfoContainer,
  OrderItemsContainer,
  OrderItemsHeader,
  OrderItemsTitle,
  OrderItemsContent,
  OrderItemContainer,
  OrderItemImage,
  OrderItemTitle,
  OrderItemQuantityContainer,
  OrderItemPriceContainer,
  OrderItemRemoveButtonContainer,
  OrderTotal,
  AddItemByQueryToOrderContainer,
  QueryContainer,
  Query,
  ItemsByQueryContainer,
  ItemsByQueryCategory,
  ItemByQueryContainer,
  ItemByQueryTitle,
  ItemByQueryOptions,
  AddItemButton,
} from "./orders.styles";

import Spinner from "../../components/spinner/spinner.component";
import { ReactComponent as Decrement } from "../../assets/decrement-button.svg";
import { ReactComponent as Increment } from "../../assets/increment-button.svg";
import { ReactComponent as RemoveIcon } from "../../assets/remove-button.svg";

import { signOutStart } from "../../redux/login/login.actions";

import {
  selectIsAdminSignedIn,
  selectIsSignedIn,
} from "../../redux/login/login.selectors";

const Orders = ({
  activeFilter,
  selectActiveFilter,
  activeOrder,
  selectActiveOrder,
  fetchOrdersAsync,
  orders,
  isFetching,
  isLoaded,
  changeOrderStatus,
  changeUserInfoField,
  incrementItem,
  decrementItem,
  removeItem,
  queryValue,
  changeQuery,
  removeQuery,
  fetchByQuery,
  isFetchingByQuery,
  isLoadedByQuery,
  itemsByQuery,
  removeItemsByQuery,
  selectOption,
  addItem,
  signOut,
  isSignedIn,
  isAdminSignedIn,
}) => {
  const statusFilters = [
    "all",
    "new",
    "processing",
    "processed",
    "delivered",
    "canceled",
  ];

  const userInfoFields = ["name", "email", "phone"];

  const orderItemsHeaderTitles = [
    "product",
    "description",
    "quantity",
    "price",
    "remove",
  ];

  const areAllArraysEmpty = (obj) =>
    Object.keys(obj).length === 0
      ? true
      : Object.keys(obj).every((key) => obj[key].length === 0)
      ? true
      : false;

  useEffect(() => {
    fetchOrdersAsync();
  }, [fetchOrdersAsync]);

  return isAdminSignedIn && isSignedIn ? (
    <div>
      <button onClick={() => signOut()}>Sign Out</button>
      <OrdersContentContainer>
        <OrdersFiltersContainer>
          {statusFilters.map((filter, idx) => (
            <OrdersFilter
              key={idx}
              active={activeFilter === filter ? true : false}
              onClick={() => {
                selectActiveFilter(filter);
                selectActiveOrder(0);
              }}
            >
              {filter}
            </OrdersFilter>
          ))}
        </OrdersFiltersContainer>
        <BriefOrdersContainer length={!!orders && orders.length}>
          {!!orders &&
            orders.map((order, idx) => (
              <BriefOrder
                key={idx}
                active={idx === activeOrder}
                onClick={() => {
                  selectActiveOrder(idx);
                  removeQuery();
                }}
              >
                <div className="order-details">
                  <span className="date">{order.data.formattedDate}</span>
                  {activeFilter === "all" ? (
                    <OrderBadge status={order.data.status}>
                      {order.data.status}
                    </OrderBadge>
                  ) : null}
                </div>
                <span>
                  <b>{order.data.name}</b>
                </span>
                <span>{order.data.phone}</span>
              </BriefOrder>
            ))}

          {isFetching && !isLoaded ? <Spinner /> : null}
        </BriefOrdersContainer>
        <OrderDetailsContainer>
          <OrderDateAndStatusContainer>
            <OrderDate>
              {!!orders && orders[activeOrder].data.formattedDate}
            </OrderDate>
            <OrderStatus>
              <label>
                Status:
                <select
                  value={!!orders && orders[activeOrder].data.status}
                  onChange={(e) => {
                    changeOrderStatus(orders[activeOrder].uid, e.target.value);
                    selectActiveFilter(activeFilter);
                  }}
                >
                  {statusFilters.map((filter, idx) =>
                    filter !== "all" ? (
                      <option key={idx} value={filter}>
                        {filter}
                      </option>
                    ) : null
                  )}
                </select>
              </label>
            </OrderStatus>
          </OrderDateAndStatusContainer>
          <UserInfoContainer>
            {userInfoFields.map((field, idx) => (
              <label key={idx}>
                {field}:
                <input
                  type="text"
                  value={!!orders && orders[activeOrder].data[field]}
                  onChange={(e) => {
                    changeUserInfoField(
                      orders[activeOrder].uid,
                      field,
                      e.target.value
                    );
                    selectActiveFilter(activeFilter);
                  }}
                />
              </label>
            ))}
          </UserInfoContainer>
          <OrderItemsContainer>
            <OrderItemsHeader>
              {orderItemsHeaderTitles.map((el, idx) => (
                <OrderItemsTitle key={idx}>{el}</OrderItemsTitle>
              ))}
            </OrderItemsHeader>
            <OrderItemsContent>
              {!!orders &&
                orders[activeOrder].data.cartItems.map(
                  (
                    {
                      title,
                      quantity,
                      selectedOption: {
                        attribute,
                        price,
                        discountPrice,
                        images: { small },
                      },
                    },
                    idx
                  ) => (
                    <OrderItemContainer key={idx}>
                      <OrderItemImage image={small[0]} />
                      <OrderItemTitle>
                        <span>
                          <b>{title}</b>
                        </span>
                        <span>{attribute}</span>
                      </OrderItemTitle>
                      <OrderItemQuantityContainer>
                        <Decrement
                          onClick={() => {
                            decrementItem(orders[activeOrder].uid, idx);
                            selectActiveFilter(activeFilter);
                          }}
                        />
                        <span>{quantity}</span>
                        <Increment
                          onClick={() => {
                            incrementItem(orders[activeOrder].uid, idx);
                            selectActiveFilter(activeFilter);
                          }}
                        />
                      </OrderItemQuantityContainer>
                      <OrderItemPriceContainer>
                        ${price > discountPrice ? discountPrice : price}
                      </OrderItemPriceContainer>
                      <OrderItemRemoveButtonContainer>
                        <RemoveIcon
                          onClick={() => {
                            removeItem(orders[activeOrder].uid, idx);
                            selectActiveFilter(activeFilter);
                          }}
                        />
                      </OrderItemRemoveButtonContainer>
                    </OrderItemContainer>
                  )
                )}
            </OrderItemsContent>
            <OrderTotal>
              Total: $
              {!!orders &&
                orders[activeOrder].data.cartItems.reduce(
                  (
                    acc,
                    { quantity, selectedOption: { price, discountPrice } }
                  ) =>
                    acc +
                    quantity * (price > discountPrice ? discountPrice : price),
                  0
                )}
            </OrderTotal>
          </OrderItemsContainer>
          <AddItemByQueryToOrderContainer>
            <QueryContainer onSubmit={(e) => e.preventDefault()}>
              <Query
                type="text"
                value={queryValue}
                onChange={(e) => {
                  changeQuery(e.target.value);

                  return Object.keys(itemsByQuery).length !== 0
                    ? removeItemsByQuery()
                    : null;
                }}
                placeholder="ex: Potted Pink Roses or b03d"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  fetchByQuery(queryValue.toUpperCase());
                }}
              >
                Search By Query
              </button>
              {queryValue !== "" ? (
                <button onClick={() => removeQuery()}>Remove Query</button>
              ) : null}
              {!areAllArraysEmpty(itemsByQuery) ? (
                <button onClick={() => removeItemsByQuery()}>
                  Remove Query Items
                </button>
              ) : null}
            </QueryContainer>
            <ItemsByQueryContainer>
              {isFetchingByQuery === true || isLoadedByQuery === false ? (
                <Spinner />
              ) : areAllArraysEmpty(itemsByQuery) ? (
                Object.keys(itemsByQuery).length !== 0 ? (
                  <div>
                    Hmmm… we have <b>0</b> results for{" "}
                    <b>{`“${queryValue}”`}</b>
                  </div>
                ) : null
              ) : (
                Object.entries(itemsByQuery).map(([category, items], idx) =>
                  !!items.length ? (
                    <ItemsByQueryContainer
                      className="items-container"
                      key={idx}
                    >
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
          </AddItemByQueryToOrderContainer>

          {/* SAVE BUTTON -- save to database */}
        </OrderDetailsContainer>
      </OrdersContentContainer>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = createStructuredSelector({
  activeFilter: selectActiveFilter,
  activeOrder: selectActiveOrder,
  orders: selectFilteredOrders,
  isFetching: selectIsFetching,
  isLoaded: selectIsLoaded,
  queryValue: selectQuery,
  isFetchingByQuery: selectIsFetchingByQuery,
  isLoadedByQuery: selectIsLoadedByQuery,
  itemsByQuery: selectItemsByQuery,
  isAdminSignedIn: selectIsAdminSignedIn,
  isSignedIn: selectIsSignedIn,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersAsync: () => dispatch(fetchOrdersStart()),
  selectActiveFilter: (filter) => dispatch(selectFilter(filter)),
  selectActiveOrder: (idx) => dispatch(selectOrder(idx)),
  changeOrderStatus: (uid, status) => dispatch(changeOrderStatus(uid, status)),
  changeUserInfoField: (uid, field, value) =>
    dispatch(changeUserInfoField(uid, field, value)),
  incrementItem: (uid, itemIdx) => dispatch(incrementItem(uid, itemIdx)),
  decrementItem: (uid, itemIdx) => dispatch(decrementItem(uid, itemIdx)),
  removeItem: (uid, itemIdx) => dispatch(removeItem(uid, itemIdx)),
  changeQuery: (value) => dispatch(changeQuery(value)),
  removeQuery: () => dispatch(removeQuery()),
  fetchByQuery: (queryValue) => dispatch(fetchByQueryStart(queryValue)),
  removeItemsByQuery: () => dispatch(removeItemsByQuery()),
  selectOption: (itemId, option, category) =>
    dispatch(selectOptionOfItemByQuery(itemId, option, category)),
  addItem: (uid, item, category, activeOrder) =>
    dispatch(addItemByQuery(uid, item, category, activeOrder)),
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
