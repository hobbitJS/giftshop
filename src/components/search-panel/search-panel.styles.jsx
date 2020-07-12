import styled from "styled-components";
import { device } from "../../device";

export const SearchPanelContainer = styled.form`
  @media ${device.mobileS} {
    height: 18px;
    width: 385px;
    display: flex;
    padding: 5px;
    order: 3;
    border: 1px solid #d893a2;
    border-radius: 5px;
    box-sizing: content-box;

    svg {
      height: 100%;
      width: 5%;
      cursor: pointer;
    }
  }

  @media ${device.tablet} {
    order: 2;
  }
`;

export const SearchPanelInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  @media ${device.mobileS} {
    height: 100%;
    width: 95%;
    border: none;
    font-family: "Raleway", sans-serif;

    &:focus {
      outline: none;
    }
  }
`;
