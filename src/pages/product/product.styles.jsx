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
    background-size: ${({ category }) =>
      category === "bouquets" || category === "plants" || category === "boxes"
        ? "cover"
        : "contain"};
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

export const ProductDetailsSection = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-flow: column;
    margin: ${({ itemsCount }) => `${itemsCount * 100 + 235}px auto 0 auto`};

    & > div {
      width: 100%;
      padding: 0 20px;
      margin-bottom: 20px;
    }
  }

  @media ${device.tablet} {
    margin: ${({ itemsCount }) =>
      `${Math.ceil(itemsCount / 3) * 105 + 200}px auto 0`};
  }

  @media ${device.laptop} {
    flex-flow: row;
    max-width: 1110px;
    margin: 50px auto 0;

    & > div {
      width: 50%;
    }
  }
`;
