import styled from "styled-components";
import { device } from "../../../device";

export const ProductOptionsContainer = styled.div`
  @media ${device.mobileS} {
    width: 320px;
    padding: 0 20px 25px;
    margin: 0 auto;
    background-color: white;
    position: absolute;
    bottom: ${({ optionsCount }) => `-${optionsCount * 100 + 235}px`};
    right: 0;
    left: 0;
  }

  @media ${device.tablet} {
    width: 100%;
    top: 500px;
    bottom: auto;
    left: auto;

    & > span {
      text-align: right;
    }
  }

  @media ${device.laptop} {
    width: 300px;
    top: auto;
    bottom: auto;

    & > span {
      text-align: left;
    }
  }
`;

export const OptionsContainer = styled.div`
  @media ${device.mobileS} {
    padding: 0 0 15px;
    display: flex;
    flex-flow: column;

    & > span {
      font-size: 14;
      font-weight: bold;
      margin: 0 0 5px;
    }
  }

  @media ${device.tablet} {
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  @media ${device.laptop} {
  }
`;
