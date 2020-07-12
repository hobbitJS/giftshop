import styled from "styled-components";
import { device } from "../../device";

export const CheckoutItemContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    align-items: center;

    & > div {
      width: 21.25%;
    }

    & > div:last-of-type {
      width: 15%;
    }
  }
`;

export const ImageContainer = styled.div`
  @media ${device.mobileS} {
    padding-right: 15px;
  }

  @media ${device.laptop} {
    cursor: pointer;
  }
`;

export const Image = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    height: 100px;
    background-image: ${({ img }) => `url(${img})`};
    background-position: 15% 50%;
    background-size: 175%;
    background-repeat: no-repeat;
  }

  @media ${device.tablet} {
    background-size: cover;
  }

  @media ${device.laptop} {
    height: 150px;
    background-position: 25% 50%;
  }
`;

export const ItemDescription = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;

    span {
      margin: 5px 0;
    }
  }

  @media ${device.laptop} {
    span {
      cursor: pointer;
    }
  }
`;

export const QuantityContainer = styled.div`
  /* width: 23%; */

  @media ${device.mobileS} {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      margin: 0 10px;
    }
  }

  @media ${device.laptop} {
    svg {
      cursor: pointer;
    }
  }
`;

export const PriceContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    justify-content: center;
  }

  /* width: 23%; */
`;

export const RemoveContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    justify-content: center;

    svg {
      height: 20px;
      width: 20px;
    }
  }

  @media ${device.laptop} {
    cursor: pointer;
  }
`;
