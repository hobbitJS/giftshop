import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectFilteredOrders,
  selectActiveOrder,
  selectActiveFilter,
  selectIsFetching,
  selectIsLoaded,
  selectQuery,
} from "../../../redux/orders/orders.selectors";

import { selectOrder, removeQuery } from "../../../redux/orders/orders.actions";

import { BriefOrdersContainer, BriefOrder } from "./brief-orders.styles";

import Spinner from "../../spinner/spinner.component";
import Badge from "../../badge/badge.component";

const BriefOrders = ({
  orders,
  activeOrder,
  activeFilter,
  setActiveOrder,
  isFetching,
  isLoaded,
  query,
  removeQuery,
}) => (
  <BriefOrdersContainer length={!!orders && orders.length}>
    {isFetching && !isLoaded ? (
      <Spinner />
    ) : (
      !!orders &&
      orders.map(({ data: { formattedDate, name, phone, status } }, idx) => (
        <BriefOrder
          key={idx}
          active={idx === activeOrder}
          onClick={() => {
            setActiveOrder(idx);
            if (query.length !== 0) removeQuery();
          }}
        >
          <span>{formattedDate}</span>
          <span>
            <b>{name}</b>
          </span>
          <span>{phone}</span>

          {activeFilter === "all" ? (
            <Badge status={status} text={status} />
          ) : null}
        </BriefOrder>
      ))
    )}
  </BriefOrdersContainer>
);

const mapStateToProps = createStructuredSelector({
  orders: selectFilteredOrders,
  activeOrder: selectActiveOrder,
  activeFilter: selectActiveFilter,
  isFetching: selectIsFetching,
  isLoaded: selectIsLoaded,
  query: selectQuery,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveOrder: (order) => dispatch(selectOrder(order)),
  removeQuery: () => dispatch(removeQuery()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BriefOrders);
