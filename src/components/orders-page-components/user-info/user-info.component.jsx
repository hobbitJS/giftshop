import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectFilteredOrders,
  selectActiveOrder,
  selectActiveFilter,
} from "../../../redux/orders/orders.selectors";

import {
  changeUserInfoField,
  selectFilter,
} from "../../../redux/orders/orders.actions";

import { UserInfoContainer } from "./user-info.styles";

const UserInfo = ({
  orders,
  activeOrder,
  activeFilter,
  changeUserInfoField,
  setActiveFilter,
}) => {
  const userInfoFields = ["name", "email", "phone", "address"];

  return (
    <UserInfoContainer>
      {userInfoFields.map((field, idx) => (
        <label key={idx}>
          {field}:
          <input
            type="text"
            value={!!orders && orders[activeOrder].data[field]}
            onChange={(e) => {
              changeUserInfoField(
                orders[activeOrder].uid,
                field,
                e.target.value
              );
              setActiveFilter(activeFilter);
            }}
          />
        </label>
      ))}
    </UserInfoContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectFilteredOrders,
  activeOrder: selectActiveOrder,
  activeFilter: selectActiveFilter,
});
const mapDispatchToProps = (dispatch) => ({
  changeUserInfoField: (uid, field, value) =>
    dispatch(changeUserInfoField(uid, field, value)),
  setActiveFilter: (filter) => dispatch(selectFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
