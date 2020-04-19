import styled, { css } from "styled-components";

import cart from "../../assets/cart.svg";

const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
`;

const textStyles = css`
  max-width: 200px;
  width: auto;
  color: black;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: bolder;

  &:hover {
    background-color: black;
    color: white;
  }
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

const isAbsolute = css`
  position: absolute;
`;

export const CustomButtonContainer = styled.button`
  ${buttonStyles}
  ${(props) => (props.isText ? textStyles : "")}
  ${(props) => (props.isIcon ? iconStyles : "")}
  ${(props) => (props.addToCartImg ? addToCartImage : "")}
  ${(props) => (props.isAbsolute ? isAbsolute : "")}
`;
