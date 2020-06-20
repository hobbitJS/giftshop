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

import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
  HeaderLayoutContainer,
  HeaderContainer,
  NavContainer,
  LogoContainer,
  HeaderLinksContainer,
  HeaderLink,
} from "./header.styles";

import SearchPanel from "../search-panel/search-panel.component";
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
            <Logo className="logo" />
          </LogoContainer>
          <HeaderLinksContainer>
            <HeaderLink to="/contact">CONTACT</HeaderLink>
            <HeaderLink to="/about-us">ABOUT US</HeaderLink>
          </HeaderLinksContainer>
          <SearchPanel
            value={searchPanelQueryValue}
            handleChange={changeQueryValue}
            handleClear={clearQueryValue}
            handleSubmit={handleSubmit}
          />
          <Cart />
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
