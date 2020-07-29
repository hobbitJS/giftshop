import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectFilteredOrders,
  selectActiveOrder,
  selectActiveFilter,
} from "../../../redux/orders/orders.selectors";

import {
  changeOrderStatus,
  selectFilter,
} from "../../../redux/orders/orders.actions";

import {
  OrderDateAndStatusContainer,
  Date,
  Status,
} from "./order-date-and-status.styles";

const OrderDateAndStatus = ({
  orders,
  activeOrder,
  changeOrderStatus,
  activeFilter,
  setActiveFilter,
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
    <OrderDateAndStatusContainer>
      <Date>{!!orders && orders[activeOrder].data.formattedDate}</Date>
      <Status>
        <label>
          Status:
          <select
            value={!!orders && orders[activeOrder].data.status}
            onChange={(e) => {
              changeOrderStatus(orders[activeOrder].uid, e.target.value);
              setActiveFilter(activeFilter);
            }}
          >
            {statusFilters.map((filter, idx) =>
              filter !== "all" ? (
                <option key={idx} value={filter}>
                  {filter}
                </option>
              ) : null
            )}
          </select>
        </label>
      </Status>
    </OrderDateAndStatusContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectFilteredOrders,
  activeOrder: selectActiveOrder,
  activeFilter: selectActiveFilter,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderStatus: (uid, value) => dispatch(changeOrderStatus(uid, value)),
  setActiveFilter: (filter) => dispatch(selectFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDateAndStatus);
