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
    flex-wrap: wrap;
    align-items: center;
    padding: 0 5px;
  }

  @media ${device.tablet} {
    width: 100vw;
    height: 60vh;
    flex-wrap: nowrap;
  }

  @media ${device.laptopL} {
    max-width: 1110px;
    padding: 0;
  }
`;

export const HomeMenuItem = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    height: ${(props) => (props.isLarge ? 400 : 300)}px;
  }

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    &:hover {
      cursor: pointer;

      & .background-image {
        transform: scale(1.1);
      }
    }
  }

  @media ${device.laptopL} {
    height: 90%;
    margin: 0 7.5px;
  }
`;

export const HomeBackgroundImage = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    background-image: url(${(props) => detectImage(props.background)});
  }
`;

export const HomeMenuLink = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    padding: 0 10px;
    position: absolute;
    transition: opacity 0.7s ease;
    font-weight: bold;
    font-size: 22px;
    color: #4a4a4a;
  }
`;
