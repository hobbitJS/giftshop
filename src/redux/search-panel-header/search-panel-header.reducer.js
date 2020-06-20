import SearchPanelHeaderActionTypes from "./search-panel-header.types";

const INITIAL_STATE = {
  query: "",
  itemsByQuery: null,
  isFetching: false,
  error: null,
};

const SearchPanelHeaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchPanelHeaderActionTypes.CHANGE_QUERY_VALUE:
      return {
        ...state,
        query: action.payload,
      };

    case SearchPanelHeaderActionTypes.FETCH_ITEMS_BY_QUERY_START:
      return {
        ...state,
        isFetching: true,
        itesmByQuery: null,
      };

    case SearchPanelHeaderActionTypes.FETCH_ITEMS_BY_QUERY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        itemsByQuery: action.payload,
      };

    case SearchPanelHeaderActionTypes.FETCH_ITESM_BY_QUERY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case SearchPanelHeaderActionTypes.CLEAR_QUERY_VALUE:
      return {
        ...state,
        query: "",
      };

    default:
      return state;
  }
};

export default SearchPanelHeaderReducer;
