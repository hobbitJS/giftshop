import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import {
  HomeMenuContainer,
  HomeMenuItem,
  HomeBackgroundImage,
  HomeMenuLink,
} from "./home-menu.styles";

const HomeMenu = ({ history, match }) => {
  const menuItems = [
    { title: "bouquets" },
    { title: "toys" },
    { title: "plants" },
    { title: "boxes", isLarge: true },
    { title: "balloons", isLarge: true },
  ];

  return (
    <HomeMenuContainer>
      {menuItems.map((el) => (
        <HomeMenuItem
          key={el.title}
          isLarge={el.isLarge}
          onClick={() => history.push(`/shop${match.url}${el.title}`)}
        >
          <HomeBackgroundImage
            background={el.title}
            className="background-image"
          />
          <HomeMenuLink className="home-menu-link">
            <CustomButton isText>{el.title}</CustomButton>
          </HomeMenuLink>
        </HomeMenuItem>
      ))}
    </HomeMenuContainer>
  );
};

export default withRouter(HomeMenu);
