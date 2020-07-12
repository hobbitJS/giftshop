import styled from "styled-components";
import { device } from "../../../device";

export const CartItemContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 290px;
  }
`;

export const CartItemImage = styled.div`
  @media ${device.mobileS} {
    background-image: ${({ image }) => (image ? `url(${image})` : null)};
    background-size: contain;
    width: 80px;
    height: 80px;
    border: 1px solid lightgrey;
    cursor: pointer;
  }
`;

export const CartItemDetails = styled.div`
  @media ${device.mobileS} {
    width: 170px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0 0 0 15px;

    b {
      margin-left: 4px;
    }
  }

  @media ${device.laptop} {
    span {
      cursor: pointer;
    }
  }
`;

export const CartItemQuantityPrice = styled.div`
  @media ${device.mobileS} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const RemoveCartItemContainer = styled.div`
  @media ${device.mobileS} {
    width: 18px;
    height: 18px;
    margin: 0 0 0 35px;
    cursor: pointer;

    svg {
      transition: all 0.3s ease;
    }
  }

  @media ${device.laptop} {
    &:hover svg {
      color: rgba(142, 115, 41, 1);
    }
  }
`;
