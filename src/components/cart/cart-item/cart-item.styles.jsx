import styled from "styled-components";
import { device } from "../../../device";

export const CartItemContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
  }
`;

export const CartItemImage = styled.div`
  @media ${device.mobileS} {
    background-image: ${({ image }) => (image ? `url(${image})` : null)};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 105px;
    height: 85px;
    border: 1px solid lightgrey;
    cursor: pointer;
  }

  @media ${device.tablet} {
    width: 85px;
  }
`;

export const CartItemDetails = styled.div`
  @media ${device.mobileS} {
    width: 170px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0 0 0 15px;
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

    span {
      b {
        margin-left: 5px;
      }
    }
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
