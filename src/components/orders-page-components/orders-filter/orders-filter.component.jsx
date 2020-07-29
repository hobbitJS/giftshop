import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectActiveFilter } from "../../../redux/orders/orders.selectors";

import {
  selectFilter,
  selectOrder,
} from "../../../redux/orders/orders.actions";

import { OrdersFiltersContainer, OrdersFilter } from "./orders-filter.styles";

const OrdersFilters = ({
  activeFilter,
  selectActiveFilter,
  selectActiveOrder,
}) => {
  const statusFilters = [
    "all",
    "new",
    "processing",
    "processed",
    "delivered",
    "canceled",
  ];

  return (
    <OrdersFiltersContainer className="orders-filters">
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
  );
};

const mapStateToProps = createStructuredSelector({
  activeFilter: selectActiveFilter,
});

const mapDispatchToProps = (dispatch) => ({
  selectActiveFilter: (filter) => dispatch(selectFilter(filter)),
  selectActiveOrder: (order) => dispatch(selectOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersFilters);
