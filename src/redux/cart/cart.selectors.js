import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectIsHidden = createSelector(
  [selectCart],
  (cart) => cart.isHidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectIsHiddenAddMessage = createSelector(
  [selectCart],
  (cart) => cart.isHiddenAddItemMessage
);

export const selectIsHiddenTriangle = createSelector(
  [selectCart],
  (cart) => cart.isHiddenTriangle
);

export const selectTotalToPay = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => {
    const {
      quantity,
      selectedOption: { price, discountPrice },
    } = item;
    return acc + quantity * (price > discountPrice ? discountPrice : price);
  }, 0)
);
