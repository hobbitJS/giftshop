import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderLayoutContainer = styled.div`
  height: 90px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 300;
`;

export const HeaderContainer = styled.div`
  height: 100%;
  max-width: 1110px;
  margin: 0 auto;
  padding: 20px 0 0 0;
  position: relative;
  background-color: white;
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 300;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;

  .logo {
    width: 70px;
    height: 70px;
  }
`;

export const HeaderLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;

  &:hover {
    color: #d893a2;
  }
`;
