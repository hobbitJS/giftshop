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
