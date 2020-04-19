import styled, { css } from "styled-components";

export const ProductItemContainer = styled.div`
  width: calc(25% - 9px);
  margin: 10px 0;
  cursor: pointer;
`;

export const ProductItemImageContainer = styled.div`
  width: 100%;
  height: 75%;
  position: relative;

  button {
    bottom: 20px;
    right: 20px;
  }
`;

export const ProductItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductItemTitle = styled.span`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
`;

export const ProductItemPriceContainer = styled.div`
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

export const ProductItemPrice = styled.span`
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: grey;
  margin-top: 5px;
  ${(props) => (props.discount ? discountStyles : null)}
  ${(props) => (props.old ? oldStyles : null)}
`;
