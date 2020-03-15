import React from "react";

import loupe from "../../assets/loupe.svg";
import {
  SearchPanelContainer,
  SearchPanelInput,
  SearchPanelInputImage
} from "./search-panel.styles";

const SearchPanel = () => (
  <SearchPanelContainer>
    <SearchPanelInput />
    <SearchPanelInputImage src={loupe} title="Search" />
  </SearchPanelContainer>
);

export default SearchPanel;
