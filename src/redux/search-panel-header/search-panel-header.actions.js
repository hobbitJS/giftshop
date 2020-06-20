import SearchPanelHeaderActionTypes from "./search-panel-header.types";

export const changeQueryValue = (value) => ({
  type: SearchPanelHeaderActionTypes.CHANGE_QUERY_VALUE,
  payload: value,
});

export const fetchByQueryStart = (query) => ({
  type: SearchPanelHeaderActionTypes.FETCH_ITEMS_BY_QUERY_START,
  payload: query,
});

export const fetchByQuerySuccess = (items) => ({
  type: SearchPanelHeaderActionTypes.FETCH_ITEMS_BY_QUERY_SUCCESS,
  payload: items,
});

export const fetchByQueryFailure = (error) => ({
  type: SearchPanelHeaderActionTypes.FETCH_ITESM_BY_QUERY_FAILURE,
  payload: error,
});

export const clearQueryValue = () => ({
  type: SearchPanelHeaderActionTypes.CLEAR_QUERY_VALUE,
});
