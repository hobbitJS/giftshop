import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import {
  HomeMenuContainer,
  MenuItem,
  ItemBackgroundImg,
} from "./home-menu.styles";

const HomeMenu = ({ history, match: { url } }) => {
  const menuItems = [
    { title: "bouquets" },
    { title: "toys" },
    { title: "plants" },
    { title: "boxes", isHigher: true },
    { title: "balloons", isHigher: true },
  ];

  return (
    <HomeMenuContainer>
      {menuItems.map(({ title, isHigher }) => (
        <MenuItem
          key={title}
          isHigher={isHigher}
          onClick={() => history.push(`/shop${url}${title}`)}
        >
          <ItemBackgroundImg
            background={title}
            className="item-background-image"
          />
          <CustomButton whiteButton text={title} />
        </MenuItem>
      ))}
    </HomeMenuContainer>
  );
};

export default withRouter(HomeMenu);
