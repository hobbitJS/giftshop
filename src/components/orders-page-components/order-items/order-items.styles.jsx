import styled from "styled-components";

export const OrderItemsContainer = styled.div`
  margin: 20px 0;
`;

export const ItemsHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  padding: 0 0 10px;
`;

export const ItemsHeaderTitle = styled.div`
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

export const ItemsContent = styled.div`
  margin: 10px 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
`;

export const ItemImage = styled.div`
  height: 90px;
  width: 20%;
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ItemTitle = styled.div`
  width: 25%;
  display: flex;
  flex-flow: column;
  justify-content: center;

  span {
    display: block;
  }
`;

export const ItemQuantityContainer = styled.div`
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

export const ItemPriceContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveButtonContainer = styled.div`
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

export const ItemsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const OrderTotal = styled.div`
  text-align: right;
  font-size: 24px;
`;

export const Badge = styled.div`
  background-color: ${({ success }) => (success ? "#28a745" : "#dc3545")};
  padding: 7px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  position: absolute;
  top: 0;
  left: 100px;
  transition: all 0.5s ease;
  animation: myMove 0.5s ease;

  @keyframes myMove {
    0% {
      top: 0;
    }

    50% {
      top: 20px;
    }

    100% {
      top: 0;
    }
  }
`;
