import styled from "styled-components";

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
  display: flex;
  flex-wrap: wrap;
`;

export const HomeMenuItem = styled.div`
  min-width: 30%;
  height: ${(props) => (props.isLarge ? 350 : 300)}px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
    }
  }
`;

export const HomeBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  background-image: url(${(props) => detectImage(props.background)});
`;

export const HomeMenuLink = styled.div`
  margin-top: 80px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: opacity 0.7s ease;
  font-weight: bold;
  font-size: 22px;
  color: #4a4a4a;
`;
