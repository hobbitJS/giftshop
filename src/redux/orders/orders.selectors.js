import { createSelector } from "reselect";

const selectOrders = (state) => state.orders;

export const selectActiveFilter = createSelector(
  [selectOrders],
  (orders) => orders.activeFilter
);

export const selectRecievedOrders = createSelector(
  [selectOrders],
  (orders) => orders.recievedOrders
);

export const selectFilteredOrders = createSelector(
  [selectOrders],
  (orders) => orders.filteredOrders
);

export const selectActiveOrder = createSelector(
  [selectOrders],
  (orders) => orders.activeOrder
);

export const selectIsFetching = createSelector(
  [selectOrders],
  (orders) => orders.isLoading
);

export const selectIsLoaded = createSelector(
  [selectOrders],
  (orders) => !!orders.recievedOrders
);

export const selectQuery = createSelector(
  [selectOrders],
  (orders) => orders.query
);

export const selectIsFetchingByQuery = createSelector(
  [selectOrders],
  (orders) => orders.isLoadingByQuery
);

export const selectIsLoadedByQuery = createSelector([selectOrders], (orders) =>
  Object.keys(orders.itemsByQuery) === [] ? false : true
);

export const selectItemsByQuery = createSelector(
  [selectOrders],
  (orders) => orders.itemsByQuery
);

export const selectShowBadgeSuccess = createSelector(
  [selectOrders],
  (orders) => orders.showBadge.success
);

export const selectShowBadgeFailure = createSelector(
  [selectOrders],
  (orders) => orders.showBadge.failure
);

export const selectIsLoadingToDatabase = createSelector(
  [selectOrders],
  (orders) => orders.isLoadingToDatabase
);
