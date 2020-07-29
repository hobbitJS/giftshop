import OrdersActionTypes from "./orders.types";

import {
  filterOrders,
  changeOrderStatus,
  changeUserInfoField,
  incrementItem,
  decrementItem,
  removeItem,
  selectOptionOfItemByQuery,
  addItemByQuery,
} from "./orders.utils";

const INITIAL_STATE = {
  recievedOrders: null,
  filteredOrders: null,
  error: "",
  isLoading: false,
  activeFilter: "",
  activeOrder: 0,
  query: "",
  itemsByQuery: {},
  errorByQuery: "",
  isLoadingByQuery: false,
  showBadge: {
    success: false,
    failure: false,
  },
  isLoadingToDatabase: false,
  savingToDatabaseError: "",
};

const OrdersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrdersActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isLoading: true,
      };

    case OrdersActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        recievedOrders: action.payload,
        isLoading: false,
      };

    case OrdersActionTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case OrdersActionTypes.SELECT_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
        filteredOrders: filterOrders(state.recievedOrders, action.payload),
      };

    case OrdersActionTypes.SELECT_ORDER:
      return {
        ...state,
        activeOrder: action.payload,
      };

    case OrdersActionTypes.CHANGE_ORDER_STATUS:
      return {
        ...state,
        recievedOrders: changeOrderStatus(state.recievedOrders, action.payload),
      };

    case OrdersActionTypes.CHANGE_USER_INFO_FIELD:
      return {
        ...state,
        recievedOrders: changeUserInfoField(
          state.recievedOrders,
          action.payload
        ),
      };

    case OrdersActionTypes.INCREMENT_ITEM:
      return {
        ...state,
        recievedOrders: incrementItem(state.recievedOrders, action.payload),
      };

    case OrdersActionTypes.DECREMENT_ITEM:
      return {
        ...state,
        recievedOrders: decrementItem(state.recievedOrders, action.payload),
      };

    case OrdersActionTypes.REMOVE_ITEM:
      return {
        ...state,
        recievedOrders: removeItem(state.recievedOrders, action.payload),
      };

    case OrdersActionTypes.CHANGE_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case OrdersActionTypes.REMOVE_QUERY:
      return {
        ...state,
        query: "",
      };

    case OrdersActionTypes.FETCH_BY_QUERY_START:
      return {
        ...state,
        isLoadingByQuery: true,
      };

    case OrdersActionTypes.FETCH_BY_QUERY_SUCCES:
      return {
        ...state,
        itemsByQuery: action.payload,
        isLoadingByQuery: false,
      };

    case OrdersActionTypes.FETCH_BY_QUERY_FAILURE:
      return {
        ...state,
        errorByQuery: action.payload,
        isLoadingByQuery: false,
      };

    case OrdersActionTypes.REMOVE_ITEMS_BY_QUERY:
      return { ...state, itemsByQuery: {} };

    case OrdersActionTypes.SELECT_OPTION_OF_ITEM_BY_QUERY:
      return {
        ...state,
        itemsByQuery: selectOptionOfItemByQuery(
          state.itemsByQuery,
          action.payload
        ),
      };

    case OrdersActionTypes.ADD_ITEM_BY_QUERY:
      return {
        ...state,
        recievedOrders: addItemByQuery(state.recievedOrders, action.payload),
      };

    case OrdersActionTypes.SAVE_ORDER_TO_FIREBASE_START:
      return {
        ...state,
        isLoadingToDatabase: true,
      };

    case OrdersActionTypes.SAVE_ORDER_TO_FIREBASE_SUCCESS:
      return {
        ...state,
        showBadge: {
          ...state.showBadge,
          success: true,
        },
        isLoadingToDatabase: false,
      };

    case OrdersActionTypes.SAVE_ORDER_TO_FIREBASE_FAILURE:
      return {
        ...state,
        showBadge: {
          ...state.showBadge,
          failure: true,
        },
        isLoadingToDatabase: false,
        savingToDatabaseError: action.payload.error,
      };

    case OrdersActionTypes.HIDE_BADGE:
      return {
        ...state,
        showBadge: {
          ...state.showBadge,
          [action.payload]: false,
        },
      };

    default:
      return state;
  }
};

export default OrdersReducer;
