import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";

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

const Header = ({ cartItems }) => (
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
        <SearchPanel />
        <Cart />
      </NavContainer>
      <CartDropdown cartItems={cartItems} />
    </HeaderContainer>
  </HeaderLayoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Header);
