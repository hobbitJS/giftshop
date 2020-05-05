import styled, { css } from "styled-components";

export const ProductCardContainer = styled.div`
  width: calc(25% - 9px);
  margin: 10px 0;
  cursor: pointer;
`;

export const ProductCardImageContainer = styled.div`
  width: 100%;
  height: 75%;
  position: relative;

  button {
    bottom: 20px;
    right: 20px;
  }
`;

export const ProductCardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductCardTitle = styled.span`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
`;

export const ProductCardPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const discountStyles = css`
  color: red;
`;

const oldStyles = css`
  text-decoration: line-through;
  font-size: 15px;
`;

export const ProductCardPrice = styled.span`
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: grey;
  margin-top: 5px;
  ${(props) => (props.discount ? discountStyles : null)}
  ${(props) => (props.old ? oldStyles : null)}
`;
