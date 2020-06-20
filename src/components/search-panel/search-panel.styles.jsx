import styled from "styled-components";

export const SearchPanelContainer = styled.form`
  height: 18px;
  width: 385px;
  padding: 5px;
  display: flex;
  border: 1px solid #d893a2;
  border-radius: 5px;
  box-sizing: content-box;

  svg {
    height: 100%;
    width: 5%;
    cursor: pointer;
  }
`;

export const SearchPanelInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  height: 100%;
  width: 95%;
  border: none;
  font-family: "Raleway", sans-serif;

  &:focus {
    outline: none;
  }
`;
