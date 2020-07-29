import styled from "styled-components";

export const OrderDateAndStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.div``;

export const Status = styled.div`
  label {
    display: flex;
    align-items: center;

    select {
      margin-left: 10px;
      text-transform: capitalize;

      option {
        text-transform: capitalize;
      }
    }
  }
`;
