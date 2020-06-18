import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const CartItemImage = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  background-size: contain;
  width: 80px;
  height: 80px;
  border: 1px solid lightgrey;
  cursor: pointer;
`;

export const CartItemDetails = styled.div`
  width: 170px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 0 0 15px;

  span {
    cursor: pointer;
  }
`;

export const CartItemQuantityPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveCartItemContainer = styled.div`
  width: 18px;
  height: 18px;
  margin: 0 0 0 35px;
  cursor: pointer;

  svg {
    transition: all 0.3s ease;
  }

  &:hover svg {
    color: rgba(142, 115, 41, 1);
  }
`;
