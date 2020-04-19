import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
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
