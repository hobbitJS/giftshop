import styled from "styled-components";
import { device } from "../../device";

import bouquets from "../../assets/homeMenuItems/bouquets.jpg";
import balloons from "../../assets/homeMenuItems/balloons.jpg";
import boxes from "../../assets/homeMenuItems/boxes.jpg";
import plants from "../../assets/homeMenuItems/plants.jpg";
import toys from "../../assets/homeMenuItems/toys.jpg";

const detectImage = (propImg) => {
  let img = "";

  switch (propImg) {
    case "bouquets":
      img = bouquets;
      break;

    case "balloons":
      img = balloons;
      break;

    case "boxes":
      img = boxes;
      break;

    case "plants":
      img = plants;
      break;

    case "toys":
      img = toys;
      break;

    default:
      return;
  }

  return img;
};

export const HomeMenuContainer = styled.div`
  @media ${device.mobileS} {
    width: 320px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0 15px;
  }

  @media ${device.tablet} {
    width: 100vw;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media ${device.laptopL} {
    max-width: 1110px;
    padding: 0;
  }
`;

export const MenuItem = styled.div`
  @media ${device.mobileS} {
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 5px 0;
    overflow: hidden;
    position: relative;

    button {
      margin-top: 100px;
      position: absolute;
    }
  }

  @media ${device.tablet} {
    height: ${({ isHigher }) => (isHigher ? `400` : `300`)}px;
    width: ${({ isHigher }) => (isHigher ? `calc(50% - 5px)` : `33%`)};
    margin: 5px 0;
  }

  @media ${device.laptop} {
    &:hover {
      cursor: pointer;

      & .item-background-image {
        transform: scale(1.1);
      }
    }
  }
`;

export const ItemBackgroundImg = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    background-image: url(${({ background }) => detectImage(background)});
  }
`;
