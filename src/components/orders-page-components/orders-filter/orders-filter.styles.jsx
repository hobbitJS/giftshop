import styled from "styled-components";

export const OrdersFiltersContainer = styled.div`
  max-height: 247px;
  display: flex;
  flex-flow: column;
  border: 1px solid grey;
  border-right: none;
`;

export const OrdersFilter = styled.div`
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease;

  &:last-of-type {
    border: none;
  }

  &:hover {
    background-color: #d893a2;
    color: white;
  }

  ${({ active }) =>
    active
      ? `{background-color: #d893a2;
    color: white;}`
      : `{background-color: lightgrey}`}
`;
