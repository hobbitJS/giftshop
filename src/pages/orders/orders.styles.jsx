import styled from "styled-components";

export const OrdersContentContainer = styled.div`
  max-width: 1110px;
  min-height: 700px;
  margin: 0 auto;
  display: flex;

  & > .orders-filters {
    width: 15%;
  }
`;

export const OrderDetails = styled.div`
  width: 60%;
  min-height: 715px;
  padding: 30px;
  border: 1px solid grey;
`;
