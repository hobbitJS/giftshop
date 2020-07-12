import OrdersActionTypes from "./orders.types";

export const fetchOrdersStart = () => ({
  type: OrdersActionTypes.FETCH_ORDERS_START,
});

export const fetchOrdersSuccess = (orders) => ({
  type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const fetchOrdersFailure = (error) => ({
  type: OrdersActionTypes.FETCH_ORDERS_FAILURE,
  payload: error,
});

export const selectFilter = (filter) => ({
  type: OrdersActionTypes.SELECT_FILTER,
  payload: filter,
});

export const selectOrder = (idx) => ({
  type: OrdersActionTypes.SELECT_ORDER,
  payload: idx,
});

export const changeOrderStatus = (uid, status) => ({
  type: OrdersActionTypes.CHANGE_ORDER_STATUS,
  payload: { uid, status },
});

export const changeUserInfoField = (uid, field, value) => ({
  type: OrdersActionTypes.CHANGE_USER_INFO_FIELD,
  payload: { uid, field, value },
});

export const incrementItem = (uid, itemIdx) => ({
  type: OrdersActionTypes.INCREMENT_ITEM,
  payload: { uid, itemIdx },
});

export const decrementItem = (uid, itemIdx) => ({
  type: OrdersActionTypes.DECREMENT_ITEM,
  payload: { uid, itemIdx },
});

export const removeItem = (uid, itemIdx) => ({
  type: OrdersActionTypes.REMOVE_ITEM,
  payload: { uid, itemIdx },
});

export const changeQuery = (query) => ({
  type: OrdersActionTypes.CHANGE_QUERY,
  payload: query,
});

export const removeQuery = () => ({
  type: OrdersActionTypes.REMOVE_QUERY,
});

export const fetchByQueryStart = (query) => ({
  type: OrdersActionTypes.FETCH_BY_QUERY_START,
  payload: query,
});

export const fetchByQuerySuccess = (itemsByQuery) => ({
  type: OrdersActionTypes.FETCH_BY_QUERY_SUCCES,
  payload: itemsByQuery,
});

export const fetchByQueryFailure = (error) => ({
  type: OrdersActionTypes.FETCH_BY_QUERY_FAILURE,
  payload: error,
});

export const removeItemsByQuery = () => ({
  type: OrdersActionTypes.REMOVE_ITEMS_BY_QUERY,
});

export const selectOptionOfItemByQuery = (itemId, option, category) => ({
  type: OrdersActionTypes.SELECT_OPTION_OF_ITEM_BY_QUERY,
  payload: { itemId, option, category },
});

export const addItemByQuery = (uid, item, category, activeOrder) => ({
  type: OrdersActionTypes.ADD_ITEM_BY_QUERY,
  payload: { uid, item, category, activeOrder },
});
