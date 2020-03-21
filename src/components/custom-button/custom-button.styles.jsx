import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  border: none;
  transition: all 0.4s ease;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const CustomButtonContainer = styled.button`
  max-width: 200px;
  width: auto;
  height: 50px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${buttonStyles}
`;
