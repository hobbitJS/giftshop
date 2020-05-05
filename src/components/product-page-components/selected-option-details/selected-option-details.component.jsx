import React from "react";

import {
  SelectedOptionDetailsContainer,
  SelectedOptionDescription,
  SelectedOptionDetailsListsContainer,
  SelectedOptionListContainer,
  SelectedOptionList,
  SelectedOptionListItem,
} from "./selected-option-details.styles";

import CustomTextSpan from "../../custom-text-span/custom-text-span.component";

const SelectedOptionDetails = ({ options, stems, selectedOption }) => (
  <SelectedOptionDetailsContainer>
    <SelectedOptionDescription>
      {options.length && options[selectedOption].description}
    </SelectedOptionDescription>
    <SelectedOptionDetailsListsContainer>
      <SelectedOptionListContainer width={`70%`}>
        <CustomTextSpan text={`DETAILS`} weight={`bold`} />
        <SelectedOptionList>
          {options.length &&
            options[selectedOption].details.map((detail, idx) => (
              <SelectedOptionListItem key={idx}>
                {detail}
              </SelectedOptionListItem>
            ))}
        </SelectedOptionList>
      </SelectedOptionListContainer>
      <SelectedOptionListContainer width={`30%`}>
        <CustomTextSpan text={`STEMS`} weight={`bold`} />
        <SelectedOptionList>
          {stems &&
            stems.map((stem, idx) => (
              <SelectedOptionListItem key={idx}>{stem}</SelectedOptionListItem>
            ))}
        </SelectedOptionList>
      </SelectedOptionListContainer>
    </SelectedOptionDetailsListsContainer>
  </SelectedOptionDetailsContainer>
);

export default SelectedOptionDetails;
