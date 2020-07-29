import styled from "styled-components";
import { device } from "../../../device";

export const ProductOptionContainer = styled.div`
  @media ${device.mobileS} {
    min-height: 82px;
    display: flex;
    margin: 15px 0;
    border: 1px solid lightgrey;
    transition: all 0.2s ease;
    box-shadow: ${({ active }) =>
      active ? `0 0 0 2px rgb(142, 115, 41)` : null};
  }

  @media ${device.tablet} {
    width: 32%;
  }

  @media ${device.laptop} {
    width: 100%;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 2px rgb(142, 115, 41);
    }
  }
`;

export const OptionImage = styled.div`
  @media ${device.mobileS} {
    width: 80px;
    height: 80px;
    background-image: url(${({ image }) => `${image}`});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const OptionDescription = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 0 15px;
  }
`;

export const PriceContainer = styled.div`
  font-weight: bold;
`;

export const RegularPrice = styled.span`
  @media ${device.mobileS} {
    color: ${({ isOnSale }) => (isOnSale ? "grey" : "black")};
    text-decoration: ${({ isOnSale }) => (isOnSale ? "line-through" : null)};
  }
`;

export const DiscountPrice = styled.span`
  @media ${device.mobileS} {
    margin-right: 10px;
  }
`;
