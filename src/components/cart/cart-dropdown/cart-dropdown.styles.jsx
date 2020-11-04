import styled from "styled-components";
import { device } from "../../../device";

export const CartDropdownContainer = styled.div`
  @media ${device.mobileS} {
    max-width: 290px;
    min-height: 44px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
    border: 1px solid lightgrey;
    opacity: 0; /* initial */
    position: absolute;
    top: 90px;
    right: 15px;
    z-index: -1;
    transition: all 1s ease;

    button {
      margin: 10px;
      padding: 0;

      a {
        display: block;
        height: 100%;
        width: 100%;
        color: white;
      }
    }
  }

  @media ${device.tablet} {
    max-width: 350px;
  }

  @media ${device.laptop} {
    right: 20px;
  }

  @media ${device.laptopL} {
    right: 0;
  }
`;

export const CartDropdownHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 42px;
  max-height: 74px;
`;

export const CartDropdownSubheader = styled.div`
  height: 42px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: rgba(227, 227, 227, 0.8);

  span {
    padding: 5px 0;
  }

  svg {
    width: 13px;
    height: 13px;
    cursor: pointer;
  }
`;

export const AddItemMessageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  background-color: rgba(134, 252, 140, 0.4);
  padding: 0 10px;

  span {
    padding: 5px 0;
  }

  svg {
    color: green;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;

export const CartSubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  padding: 5px 10px;
  background-color: rgba(227, 227, 227, 0.8);
  align-items: center;

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;
