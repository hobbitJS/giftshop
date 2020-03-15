import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { HeaderContainer, LogoContainer } from "./header.styles";
import SearchPanel from "../search-panel/search-panel.component";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <SearchPanel />
  </HeaderContainer>
);

export default Header;
