import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsAdminSignedIn,
  selectIsSignedIn,
} from "../../redux/login/login.selectors";

import { AdminPanelContainer } from "./admin-panel.styles";

import Orders from "../orders/orders.component";

const AdminPanel = ({ isAdminSignedIn, isSignedIn, match }) => {
  return (
    <AdminPanelContainer>
      <Route path={`${match.path}/orders`} component={Orders} />
      {!isAdminSignedIn || !isSignedIn ? <Redirect to="/" /> : null}
    </AdminPanelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isAdminSignedIn: selectIsAdminSignedIn,
  isSignedIn: selectIsSignedIn,
});

export default withRouter(connect(mapStateToProps)(AdminPanel));
