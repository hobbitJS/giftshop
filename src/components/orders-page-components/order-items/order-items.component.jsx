import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectFilteredOrders,
  selectActiveOrder,
  selectActiveFilter,
  selectShowBadgeSuccess,
  selectShowBadgeFailure,
  selectIsLoadingToDatabase,
} from "../../../redux/orders/orders.selectors";

import {
  incrementItem,
  decrementItem,
  removeItem,
  selectFilter,
  hideBadge,
  saveOrderToFirebaseStart,
} from "../../../redux/orders/orders.actions";

import {
  OrderItemsContainer,
  ItemsHeader,
  ItemsHeaderTitle,
  ItemsContent,
  ItemContainer,
  ItemImage,
  ItemTitle,
  ItemQuantityContainer,
  ItemPriceContainer,
  RemoveButtonContainer,
  ItemsFooter,
  OrderTotal,
  Badge,
} from "./order-items.styles";

import { ReactComponent as IncrementIcon } from "../../../assets/increment-button.svg";
import { ReactComponent as DecrementIcon } from "../../../assets/decrement-button.svg";
import { ReactComponent as RemoveIcon } from "../../../assets/remove-button.svg";
import CustomButton from "../../custom-button/custom-button.component";
import Spinner from "../../spinner/spinner.component";

const OrderItems = ({
  orders,
  activeOrder,
  activeFilter,
  setActiveFilter,
  incrementItem,
  decrementItem,
  removeItem,
  isLoadingToDatabase,
  showBadgeSuccess,
  showBadgeFailure,
  saveOrder,
  hideBadge,
}) => {
  const orderItemsHeaderTitles = [
    "product",
    "description",
    "quantity",
    "price",
    "remove",
  ];

  const refactoredFunc = (callback, idx) => {
    callback(orders[activeOrder].uid, idx);
    setActiveFilter(activeFilter);
  };

  return (
    <OrderItemsContainer>
      <ItemsHeader>
        {orderItemsHeaderTitles.map((el, idx) => (
          <ItemsHeaderTitle key={idx}>{el}</ItemsHeaderTitle>
        ))}
      </ItemsHeader>
      <ItemsContent>
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
              <ItemContainer key={idx}>
                <ItemImage image={small[0]} />
                <ItemTitle>
                  <span>
                    <b>{title}</b>
                  </span>
                  <span>{attribute}</span>
                </ItemTitle>
                <ItemQuantityContainer>
                  <DecrementIcon
                    onClick={() => refactoredFunc(decrementItem, idx)}
                  />
                  <span>{quantity}</span>
                  <IncrementIcon
                    onClick={() => refactoredFunc(incrementItem, idx)}
                  />
                </ItemQuantityContainer>
                <ItemPriceContainer>
                  ${price > discountPrice ? discountPrice : price}
                </ItemPriceContainer>
                <RemoveButtonContainer>
                  <RemoveIcon onClick={() => refactoredFunc(removeItem, idx)} />
                </RemoveButtonContainer>
              </ItemContainer>
            )
          )}
      </ItemsContent>
      <ItemsFooter>
        <CustomButton
          blackButton
          width={20}
          text={"SAVE"}
          onClick={() => {
            saveOrder(orders[activeOrder]);
            setTimeout(() => {
              if (!showBadgeSuccess) return hideBadge("success");
              if (!showBadgeFailure) return hideBadge("failure");
            }, 3000);
          }}
        />
        {isLoadingToDatabase ? <Spinner /> : null}
        {showBadgeSuccess ? <Badge success={true}>Success</Badge> : null}
        {showBadgeFailure ? <Badge success={false}>Failure</Badge> : null}
        <OrderTotal>
          Total: $
          {!!orders &&
            orders[activeOrder].data.cartItems.reduce(
              (acc, { quantity, selectedOption: { price, discountPrice } }) =>
                acc +
                quantity * (price > discountPrice ? discountPrice : price),
              0
            )}
        </OrderTotal>
      </ItemsFooter>
    </OrderItemsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectFilteredOrders,
  activeOrder: selectActiveOrder,
  activeFilter: selectActiveFilter,
  isLoadingToDatabase: selectIsLoadingToDatabase,
  showBadgeSuccess: selectShowBadgeSuccess,
  showBadgeFailure: selectShowBadgeFailure,
});
const mapDispatchToProps = (dispatch) => ({
  incrementItem: (uid, idx) => dispatch(incrementItem(uid, idx)),
  decrementItem: (uid, idx) => dispatch(decrementItem(uid, idx)),
  removeItem: (uid, idx) => dispatch(removeItem(uid, idx)),
  setActiveFilter: (filter) => dispatch(selectFilter(filter)),
  saveOrder: (order) => dispatch(saveOrderToFirebaseStart(order)),
  hideBadge: (badge) => dispatch(hideBadge(badge)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems);
