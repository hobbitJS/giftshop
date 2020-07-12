import React, { useEffect } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsAdminSignedIn } from "../../redux/login/login.selectors";

import { AdminPanelContainer } from "./admin-panel.styles";

import Orders from "../orders/orders.component";

const AdminPanel = ({ isAdminSignedIn, match }) => {
  useEffect(() => {
    return () => {};
  }, [match, isAdminSignedIn]);

  return (
    <AdminPanelContainer>
      <Route path={`${match.path}/orders`} component={Orders} />
      {!isAdminSignedIn ? <Redirect to="/" /> : null}
    </AdminPanelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isAdminSignedIn: selectIsAdminSignedIn,
});

export default withRouter(connect(mapStateToProps)(AdminPanel));
