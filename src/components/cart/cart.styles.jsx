import styled from "styled-components";
import { device } from "../../device";

export const CartContainer = styled.div`
  @media ${device.mobileS} {
    height: 100%;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;

    & > div {
      height: 35%;
      display: flex;
      align-items: flex-end;
    }
  }
`;

export const CartIconContainer = styled.div`
  @media ${device.mobileS} {
    width: 30px;
    position: relative;

    .cart-icon {
      height: 30px;
      width: 30px;
    }
  }

  @media ${device.laptop} {
    cursor: pointer;
  }
`;

export const TriangleContainer = styled.div`
  @media ${device.mobileS} {
    div {
      padding-top: 10px;
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
