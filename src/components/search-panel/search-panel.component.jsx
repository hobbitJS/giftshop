import React from "react";

import { ReactComponent as Loupe } from "../../assets/loupe.svg";

import { SearchPanelContainer, SearchPanelInput } from "./search-panel.styles";

const SearchPanel = ({
  value,
  handleChange,
  handleClear,
  handleSubmit,
  place,
}) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
    handleClear();
    document.activeElement.blur();
  };

  return (
    <SearchPanelContainer onSubmit={(e) => submit(e)} place={place}>
      <SearchPanelInput
        placeholder="Search for gifts..."
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        required
      />
      <button type="submit" onSubmit={(e) => submit(e)} title="Search">
        <Loupe />
      </button>
    </SearchPanelContainer>
  );
};

export default SearchPanel;
