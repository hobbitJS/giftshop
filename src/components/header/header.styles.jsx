import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../device";

export const HeaderLayoutContainer = styled.div`
  @media ${device.mobileS} {
    height: 130px;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 300;
  }

  @media ${device.tablet} {
    height: 100px;
  }
`;

export const HeaderContainer = styled.div`
  @media ${device.mobileS} {
    height: 100%;
    margin: 0 auto;
    padding: 10px 15px 0 15px;
    position: relative;
    background-color: white;
  }

  @media ${device.laptop} {
    max-width: 1110px;
    padding: 10px 20px 0;
  }

  @media ${device.laptopL} {
    padding: 10px 0 0;
  }
`;

export const NavContainer = styled.div`
  @media ${device.mobileS} {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    z-index: 300;
  }

  @media ${device.tablet} {
    height: 100%;
  }
`;

export const LogoContainer = styled(Link)`
  @media ${device.mobileS} {
    height: 70%;
    width: 50%;
    order: 1;

    .logo {
      width: 100%;
      height: 100%;
    }
  }

  @media ${device.tablet} {
    height: 100%;
    width: 20%;
  }

  @media ${device.laptop} {
    width: 15%;
  }
`;

export const HeaderUtilityContainer = styled.div`
  @media ${device.mobileS} {
    height: 70%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    order: 2;
  }

  @media ${device.tablet} {
    height: 100%;
    width: auto;
    order: 3;
  }
`;
