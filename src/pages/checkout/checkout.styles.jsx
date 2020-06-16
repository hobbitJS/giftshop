import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 1110px;
  margin: 120px auto;
  display: flex;
  justify-content: space-between;
`;

export const CheckoutFormContainer = styled.div`
  width: 30%;
`;

export const CheckoutItemsContainer = styled.div`
  width: 65%;
  display: flex;
  flex-flow: column;

  span {
    align-self: flex-end;
  }
`;

export const CheckoutItemsHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutItemsHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  text-align: center;

  &:last-child {
    width: 8%;
  }
`;
