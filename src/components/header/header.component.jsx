import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectSearchPanelQueryValue } from "../../redux/search-panel-header/search-panel.selectors";

import {
  changeQueryValue,
  clearQueryValue,
} from "../../redux/search-panel-header/search-panel-header.actions";

import logob from "../../assets/logob.png";

import {
  HeaderLayoutContainer,
  HeaderContainer,
  NavContainer,
  LogoContainer,
  HeaderUtilityContainer,
} from "./header.styles";

import SearchPanel from "../search-panel/search-panel.component";
import Auth from "../header/auth/auth.component";
import Cart from "../cart/cart.component";
import CartDropdown from "../cart/cart-dropdown/cart-dropdown.component";

const Header = ({
  cartItems,
  history,
  changeQueryValue,
  clearQueryValue,
  searchPanelQueryValue,
}) => {
  const handleSubmit = () => {
    history.push(`/search/${searchPanelQueryValue.toUpperCase()}`);
  };

  return (
    <HeaderLayoutContainer id="header">
      <HeaderContainer>
        <NavContainer>
          <LogoContainer to="/">
            <img src={logob} alt="Logo" className="logo" />
          </LogoContainer>

          <SearchPanel
            value={searchPanelQueryValue}
            handleChange={changeQueryValue}
            handleClear={clearQueryValue}
            handleSubmit={handleSubmit}
            place="header"
          />

          <HeaderUtilityContainer>
            <Auth />
            <Cart />
          </HeaderUtilityContainer>
        </NavContainer>

        <CartDropdown cartItems={cartItems} />
      </HeaderContainer>
    </HeaderLayoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  searchPanelQueryValue: selectSearchPanelQueryValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeQueryValue: (value) => dispatch(changeQueryValue(value)),
  clearQueryValue: () => dispatch(clearQueryValue()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
