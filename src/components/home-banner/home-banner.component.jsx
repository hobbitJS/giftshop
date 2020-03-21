import React from "react";
import { Link } from "react-router-dom";

import homeBannerImg from "../../assets/home-page.jpg";

import { HomeBannerContainer, HomeBannerImage } from "./home-banner.styles";

import Quote from "../quote/quote.component";
import CustomButton from "../custom-button/custom-button.component";

const HomeBanner = () => (
  <HomeBannerContainer>
    <HomeBannerImage src={homeBannerImg} />
    <Quote firstPart="- the hands" secondPart="of MIRACULOUS">
      <Link to="/shop">
        <CustomButton isBannerButton>Shop Now</CustomButton>
      </Link>
    </Quote>
  </HomeBannerContainer>
);

export default HomeBanner;
