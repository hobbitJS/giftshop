import styled, { css } from "styled-components";

import cart from "../../assets/cart.svg";

const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const textStyles = css`
  width: ${({ width }) => (width ? `${width}` : "auto")};
  color: ${({ color }) => (color ? `${color}` : "black")};
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: bolder;
`;

const iconStyles = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-position: 40% 50%;
  background-repeat: no-repeat;
  background-size: 60% 60%;

  &:hover {
    background-color: rgba(216, 147, 162, 0.7);
  }
`;

const addToCartImage = css`
  background-image: ${`url(${cart})`};
`;

const isAbsoluteStyles = css`
  position: absolute;
`;

export const CustomButtonContainer = styled.button`
  ${buttonStyles}
  ${({ isText }) => (isText ? textStyles : "")}
  ${({ isIcon }) => (isIcon ? iconStyles : "")}
  ${({ addToCartImg }) => (addToCartImg ? addToCartImage : "")}
  ${({ isAbsolute }) => (isAbsolute ? isAbsoluteStyles : "")}
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : "")};
  
  &:hover {
    color: ${({ colorHover }) => (colorHover ? `${colorHover}` : "")};
    background-color: ${({ bgColorHover }) =>
      bgColorHover ? `${bgColorHover}` : ""}
  }
`;
