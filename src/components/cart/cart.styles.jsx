import styled from "styled-components";
import { device } from "../../device";

export const CartContainer = styled.div`
  @media ${device.mobileS} {
    position: relative;
    align-self: flex-end;
  }
`;

export const CartIconContainer = styled.div`
  @media ${device.mobileS} {
    width: 30px;
    height: 30px;
    position: relative;

    .cart-icon {
      width: 100%;
      height: 100%;
    }
  }

  @media ${device.laptop} {
    cursor: pointer;
  }
`;

export const TriangleContainer = styled.div`
  @media ${device.mobileS} {
    padding-left: 3px;
    padding-top: 5px;

    div {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 15px 15px 15px;
      border-color: transparent;
      transition: all 0.3s ease;
    }

    .visible-triangle {
      border-color: transparent transparent rgba(227, 227, 227, 0.8) transparent;
    }
  }

  @media ${device.laptop} {
    cursor: pointer;
  }
`;

export const CartCounter = styled.div`
  @media ${device.mobileS} {
    position: absolute;
    top: -15px;
    left: -15px;
    padding: 1px 5px;
    border-radius: 50%;
    background-color: rgba(255, 174, 175, 0.5);
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: black;
  }
`;
