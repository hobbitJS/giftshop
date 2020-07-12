import styled from "styled-components";
import { device } from "../../device";

export const CheckoutContainer = styled.div`
  @media ${device.mobileS} {
    width: 100vw;
    flex-flow: column;
    display: flex;
    justify-content: space-between;
    margin: 120px auto 40px auto;
  }

  @media ${device.laptop} {
    flex-flow: row;
  }

  @media ${device.laptopL} {
    max-width: 1110px;
  }
`;

export const CheckoutFormContainer = styled.div`
  @media ${device.mobileS} {
    max-width: 400px;
    margin: 0 auto;
    padding: 0 30px;
  }

  @media ${device.laptop} {
    width: 35%;
    padding: 0 20px 0 10px;
  }
`;

export const CheckoutItemsContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-flow: column;
    margin-top: 40px;
    padding: 0 20px;
    width: 100%;

    span {
      align-self: flex-end;
    }
  }

  @media ${device.laptop} {
    width: 65%;
    margin: 0;
  }
`;

export const CheckoutItemsHeader = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
  }
`;

export const CheckoutItemsHeaderBlock = styled.div`
  @media ${device.mobileS} {
    width: 21.25%;
    text-transform: capitalize;
    text-align: center;

    &:first-child {
      text-align: left;
    }

    &:last-child {
      width: 15%;
    }
  }

  /* width: 23%;

  &:last-child {
    width: 8%;
  } */
`;
