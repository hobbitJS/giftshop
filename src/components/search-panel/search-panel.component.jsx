import React from "react";

import { ReactComponent as Loupe } from "../../assets/loupe.svg";

import { SearchPanelContainer, SearchPanelInput } from "./search-panel.styles";

const SearchPanel = ({ value, handleChange, handleClear, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
    handleClear();
    document.activeElement.blur();
  };

  return (
    <SearchPanelContainer onSubmit={(e) => submit(e)}>
      <SearchPanelInput
        placeholder="Search for gifts..."
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Loupe title="Search" />
    </SearchPanelContainer>
  );
};

export default SearchPanel;
