import styled from "styled-components";

export const HomeBannerContainer = styled.div`
  width: 100%;
  position: relative;

  & > div {
    position: absolute;
    top: calc(100% / 2 - 130px);
    right: 0;
  }
`;

export const HomeBannerImage = styled.img`
  width: 100%;
`;
