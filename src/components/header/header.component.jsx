import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
  HeaderLayoutContainer,
  HeaderContainer,
  LogoContainer,
  HeaderLinksContainer,
  HeaderLink,
} from "./header.styles";

import SearchPanel from "../search-panel/search-panel.component";
import Cart from "../cart/cart.component";

const Header = () => (
  <HeaderLayoutContainer>
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <HeaderLinksContainer>
        <HeaderLink to="/contact">CONTACT</HeaderLink>
        <HeaderLink to="/about-us">ABOUT US</HeaderLink>
      </HeaderLinksContainer>
      <SearchPanel />
      <Cart />
    </HeaderContainer>
  </HeaderLayoutContainer>
);

export default Header;
