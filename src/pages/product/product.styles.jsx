import styled from "styled-components";
import { device } from "../../device";

export const ProductContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
  }
`;

export const ProductImage = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    height: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${({ image }) => `${image}`});
    background-position: 28% 0%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  @media ${device.mobileM} {
    height: 380px;
  }

  @media ${device.mobileL} {
    height: 400px;
  }

  @media ${device.tablet} {
    height: 500px;
    background-position: center;
  }

  @media ${device.laptop} {
    height: 600px;
  }

  @media ${device.laptopL} {
    height: 740px;
    padding: 30px 60px;
  }
`;

export const ProductOptionIconContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  @media ${device.tablet} {
    right: auto;
    bottom: 10px;
    left: 20px;
  }
`;

export const ProductOptionIcon = styled.div`
  @media ${device.mobileS} {
    background-image: url(${({ image }) => `${image}`});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 80px;
    height: 80px;
    margin: 2px;
    transition: all 0.2s ease;
    box-shadow: ${({ active }) =>
      active ? "3px 0 0 0 rgba(142,115,41,1)" : ""};
  }

  @media ${device.laptop} {
    cursor: pointer;

    &:hover {
      box-shadow: 3px 0 0 0 rgba(142, 115, 41, 1);
    }
  }
`;

export const ProductOptionsContainer = styled.div`
  @media ${device.mobileS} {
    width: 320px;
    padding: 25px 20px;
    margin: 0 auto;
    background-color: white;
    position: absolute;
    bottom: ${({ itemsCount }) => `-${itemsCount * 100 + 185}px`};
    right: 0;
    left: 0;
  }

  @media ${device.tablet} {
    width: 300px;
    bottom: auto;
    left: auto;
  }
`;

export const ProductOptions = styled.div``;

export const ProductOptionContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    min-height: 82px;
    border: 1px solid lightgrey;
    margin-bottom: 15px;
    transition: all 0.2s ease;

    box-shadow: ${({ active }) =>
      active ? `0 0 0 2px rgb(142, 115, 41)` : ""};
  }

  @media ${device.laptop} {
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 2px rgb(142, 115, 41);
    }
  }
`;

export const ProductOptionImage = styled.div`
  @media ${device.mobileS} {
    width: 80px;
    height: 80px;
    background-image: url(${({ image }) => `${image}`});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const ProductOptionDescription = styled.div`
  @media ${device.mobileS} {
    padding: 0 15px;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
`;

export const ProductDetailsSection = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-flow: column;
    margin: ${({ itemsCount }) => `${itemsCount * 100 + 185}px auto 0 auto`};

    & > div {
      width: 100%;
      padding: 0 20px;
      margin-bottom: 20px;
    }
  }

  @media ${device.tablet} {
    margin: 50px auto 0;
  }

  @media ${device.laptop} {
    flex-flow: row;
    max-width: 1110px;

    & > div {
      width: 50%;
    }
  }
`;
