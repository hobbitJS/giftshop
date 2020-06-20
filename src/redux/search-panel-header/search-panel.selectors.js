import { createSelector } from "reselect";

const selectSearchPanelHeader = (state) => state.searchPanelHeader;

export const selectSearchPanelQueryValue = createSelector(
  [selectSearchPanelHeader],
  (searchPanelHeader) => searchPanelHeader.query
);

export const selectSearchPanelHeaderItemsByQuery = createSelector(
  [selectSearchPanelHeader],
  (searchPanelHeader) => searchPanelHeader.itemsByQuery
);

export const selectSearchPanelHeaderIsFetching = createSelector(
  [selectSearchPanelHeader],
  (searchPanelHeader) => searchPanelHeader.isFetching
);

export const selectSearchPanelHeaderisLoaded = createSelector(
  [selectSearchPanelHeader],
  (searchPanelHeader) => !!searchPanelHeader.itemsByQuery
);
