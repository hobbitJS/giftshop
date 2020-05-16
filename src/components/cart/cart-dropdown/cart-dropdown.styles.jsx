import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: absolute;
  top: 50px;
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

export const CartDropdownHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 42px;
  max-height: 74px;
`;

export const CartDropdownSubheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
