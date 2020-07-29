import styled, { css } from "styled-components";
import { device } from "../../device";

const buttonStyles = css`
  @media ${device.mobileS} {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    padding: 0 10px;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    font-weight: bolder;
    border: none;
    outline: none;
  }

  @media ${device.laptop} {
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

const blackButtonStyles = css`
  width: ${({ width }) => (width ? `${width}%` : "70%")};
  /* min-width: 200px; */
  color: white;
  background-color: black;

  &:hover {
    background-color: rgba(142, 115, 41, 1);
  }
`;

const whiteButtonStyles = css`
  background-color: rgba(255, 255, 255, 0.8);

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const CustomButtonContainer = styled.button`
  ${buttonStyles}
  ${({ blackButton }) => (blackButton ? blackButtonStyles : "")}
  ${({ whiteButton }) => (whiteButton ? whiteButtonStyles : "")}
`;
