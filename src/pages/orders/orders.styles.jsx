import styled from "styled-components";

export const OrdersContentContainer = styled.div`
  max-width: 1110px;
  min-height: 700px;
  margin: 0 auto;
  display: flex;
`;

export const OrdersFiltersContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 15%;
  max-height: 247px;
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

export const BriefOrdersContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 25%;
  border: ${({ length }) => (length > 0 ? "1px solid grey" : "none")};
  border-right: none;
  height: ${({ length }) => (length > 0 ? `${length * 97}px` : 0)};
  max-height: 715px;

  ${({ length }) => (length > 7 ? "overflow-y: scroll" : null)};

  .loadingio-spinner-spin-znprxbqdws {
    align-self: center;
    position: absolute;
    top: 35%;
  }
`;

export const BriefOrder = styled.div`
  width: 100%;
  padding: 0 20px;
  cursor: pointer;
  border-bottom: 1px solid grey;
  transition: all 0.3s ease;

  &:last-of-type {
    border: none;
  }

  &:hover {
    background-color: #d893a2;
  }

  ${({ active }) =>
    active ? `{background-color: #d893a2}` : `{background-color: lightgrey}`}

  span {
    display: block;
    padding: 5px;
  }

  .order-details {
    display: flex;
    justify-content: space-between;

    .status {
      text-transform: capitalize;
      font-weight: bold;
    }
  }
`;

const detectBadgeColor = (status) => {
  switch (status) {
    case "all":
      return "white";

    case "new":
      return "#00cc44";

    case "processing":
      return "#ff4d88";

    case "processed":
      return "#00bfff";

    case "delivered":
      return "#0086b3";

    case "canceled":
      return "#ff5c33";
    default:
      return;
  }
};

export const OrderBadge = styled.span`
  margin-top: 5px;
  padding: 2px;
  text-transform: capitalize;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  background-color: ${({ status }) => detectBadgeColor(status)};
`;

export const OrderDetailsContainer = styled.div`
  width: 60%;
  min-height: 715px;
  padding: 30px;
  border: 1px solid grey;
`;

export const OrderDateAndStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderDate = styled.div``;

export const OrderStatus = styled.div`
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

export const UserInfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px 0 10px;

  label {
    max-width: 230px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;

    input {
    }
  }
`;

export const OrderItemsContainer = styled.div`
  margin: 20px 0;
`;

export const OrderItemsHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  padding: 0 0 10px;
`;

export const OrderItemsTitle = styled.div`
  width: 20%;
  text-transform: capitalize;
  text-align: center;

  &:nth-child(2),
  &:nth-child(3) {
    width: 25%;
  }

  &:last-of-type {
    width: 10%;
  }
`;

export const OrderItemsContent = styled.div`
  margin: 10px 0;
`;

export const OrderItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
`;

export const OrderItemImage = styled.div`
  height: 90px;
  width: 20%;
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const OrderItemTitle = styled.div`
  width: 25%;
  display: flex;
  flex-flow: column;
  justify-content: center;

  span {
    display: block;
  }
`;

export const OrderItemQuantityContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    margin: 0 15px;
    cursor: pointer;
  }
`;

export const OrderItemPriceContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderItemRemoveButtonContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const OrderTotal = styled.div`
  text-align: right;
`;

export const AddItemByQueryToOrderContainer = styled.form`
  & > div {
    display: block;
  }
`;

export const QueryContainer = styled.div`
  button {
    margin: 0 5px;
  }
`;

export const Query = styled.input`
  width: 190px;
  margin-right: 5px;
`;

export const ItemsByQueryContainer = styled.div`
  width: 100%;
`;

export const ItemsByQueryCategory = styled.div`
  width: 100%;
  text-transform: uppercase;
  font-size: 18px;
  margin: 20px 0 10px 0;
  border-bottom: 1px solid lightgrey;
`;

export const ItemByQueryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const ItemByQueryTitle = styled.div`
  width: 35%;
  span {
    display: block;
  }
`;

export const ItemByQueryOptions = styled.select`
  width: 35%;
  max-height: 30px;
`;

export const AddItemButton = styled.button`
  width: 12%;
  max-height: 25px;
`;
