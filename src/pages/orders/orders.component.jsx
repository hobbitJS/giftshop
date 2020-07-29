import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchOrdersStart } from "../../redux/orders/orders.actions";

import {
  selectIsAdminSignedIn,
  selectIsSignedIn,
} from "../../redux/login/login.selectors";

import { OrdersContentContainer, OrderDetails } from "./orders.styles";

import OrdersFilters from "../../components/orders-page-components/orders-filter/orders-filter.component";
import BriefOrders from "../../components/orders-page-components/brief-orders/brief-orders.component";
import OrderDateAndStatus from "../../components/orders-page-components/order-date-and-status/order-date-and-status.component";
import UserInfo from "../../components/orders-page-components/user-info/user-info.component";
import OrderItems from "../../components/orders-page-components/order-items/order-items.component";
import SearchPanelOrdersPage from "../../components/orders-page-components/search-panel-orders-page/search-panel-orders-page.component";

const Orders = ({ fetchOrdersAsync, isSignedIn, isAdminSignedIn }) => {
  useEffect(() => {
    fetchOrdersAsync();
  }, [fetchOrdersAsync]);

  return isAdminSignedIn && isSignedIn ? (
    <OrdersContentContainer>
      <OrdersFilters />

      <BriefOrders />

      <OrderDetails>
        <OrderDateAndStatus />
        <UserInfo />
        <OrderItems />
        <SearchPanelOrdersPage />
      </OrderDetails>
    </OrdersContentContainer>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = createStructuredSelector({
  isAdminSignedIn: selectIsAdminSignedIn,
  isSignedIn: selectIsSignedIn,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersAsync: () => dispatch(fetchOrdersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
