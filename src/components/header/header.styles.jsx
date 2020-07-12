import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../device";

export const HeaderLayoutContainer = styled.div`
  @media ${device.mobileS} {
    height: auto;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 300;
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
    flex-wrap: wrap;
  }
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 300;
`;

export const LogoContainer = styled(Link)`
  @media ${device.mobileS} {
    height: 100%;
    width: 50%;
    order: 1;

    .logo {
      width: 50px;
      height: 50px;
    }
  }

  @media ${device.tablet} {
    width: 70px;

    .logo {
      width: 70px;
      height: 70px;
    }
  }
`;

export const HeaderLinksContainer = styled.div`
  @media ${device.mobileS} {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const HeaderLink = styled(Link)`
  @media ${device.mobileS} {
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.2s ease;
  }

  @media ${device.laptop} {
    &:hover {
      color: #d893a2;
    }
  }
`;

export const HeaderUtilityContainer = styled.div`
  @media ${device.mobileS} {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    order: 2;

    div {
      margin-top: 12%;
    }
  }

  @media ${device.tablet} {
    width: auto;
    order: 3;

    div {
      margin-top: 25%;
    }
  }
`;

export const LoginLinkContainer = styled(Link)`
  @media ${device.mobileS} {
    margin-right: 30px;
    border-radius: 50%;
    padding: 7px 7px 3px 7px;
    transition: all 0.3s ease;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media ${device.laptop} {
    &:hover {
      box-shadow: 0px 0px 10px 0px #d893a2;
    }
  }
`;
