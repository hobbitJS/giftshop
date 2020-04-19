import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  HeaderLinksContainer,
  HeaderLink,
} from "./header.styles";

import SearchPanel from "../search-panel/search-panel.component";
import Cart from "../cart/cart.component";
// import ContactNumber from "../contact-number/contact-number.component"; - we can add this optional component wherever we want

const Header = () => (
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
);

export default Header;
