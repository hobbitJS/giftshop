import styled from "styled-components";

export const CartContainer = styled.div`
  position: relative;
`;

export const CartIconContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;

  .cart-icon {
    width: 100%;
    height: 100%;
  }
`;

export const CartCounter = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  padding: 1px 5px;
  border-radius: 50%;
  background-color: rgba(255, 174, 175, 0.5);
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: black;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: absolute;
  top: 30px;
  right: -10px;
  min-height: 44px;
  min-width: 335px;
  background-color: white;
  border: 1px solid lightgrey;
  z-index: 299;

  button {
    margin: 10px;

    a {
      color: white;
    }
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 5px 10px;
  background-color: rgba(227, 227, 227, 1);

  span {
    padding: 5px 0;
  }

  svg {
    width: 13px;
    height: 13px;
    cursor: pointer;
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const CartItemImage = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  width: 80px;
  height: 80px;
  border: 1px solid lightgrey;
`;

export const CartItemDetailsContainer = styled.div`
  width: 165px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 0 0 15px;
`;

export const CartItemQuantityPriceContainer = styled.div`
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
