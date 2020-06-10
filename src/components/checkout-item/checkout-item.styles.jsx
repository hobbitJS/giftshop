import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.div`
  width: 100%;
  height: 200px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: 15% 50%;
  background-size: 175%;
  background-repeat: no-repeat;
`;

export const ItemDescription = styled.div`
  width: 23%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const QuantityContainer = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 10px;
  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const PriceContainer = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
`;

export const RemoveContainer = styled.div`
  width: 8%;
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    height: 25px;
    width: 25px;
  }
`;
