import styled, { css } from "styled-components";
import { device } from "../../device";

export const ProductCardContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    padding: 0 20px;
    margin: 10px 0;
  }

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    cursor: pointer;
    width: calc(25% - 9px);
  }
`;

export const ProductCardImageContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    height: 75%;
    position: relative;

    button {
      bottom: 20px;
      right: 20px;
    }
  }

  @media ${device.tablet} {
    height: 70%;
  }
`;

export const ProductCardImage = styled.img`
  @media ${device.mobileS} {
    width: 100%;
    height: 100%;
  }
`;

export const ProductCardTitle = styled.span`
  @media ${device.mobileS} {
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
  }
`;

export const ProductCardPriceContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
  }
`;

const discountStyles = css`
  color: red;
`;

const oldStyles = css`
  text-decoration: line-through;
  font-size: 15px;
`;

export const ProductCardPrice = styled.span`
  @media ${device.mobileS} {
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    color: grey;
    margin-top: 5px;
    ${(props) => (props.discount ? discountStyles : null)}
    ${(props) => (props.old ? oldStyles : null)}
  }
`;
