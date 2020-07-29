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
    {options.length && options[selectedOption].description ? (
      <SelectedOptionDescription>
        {options[selectedOption].description}
      </SelectedOptionDescription>
    ) : null}
    <SelectedOptionDetailsListsContainer>
      {options.length && options[selectedOption].details ? (
        <SelectedOptionListContainer width={`70%`}>
          <CustomTextSpan text={`DETAILS`} weight={`bold`} />
          <SelectedOptionList>
            {options[selectedOption].details.length
              ? options[selectedOption].details.map((detail, idx) => (
                  <SelectedOptionListItem key={idx}>
                    {detail}
                  </SelectedOptionListItem>
                ))
              : Object.entries(
                  options[selectedOption].details
                ).map(([key, value], idx) => (
                  <SelectedOptionListItem key={idx}>
                    {`${key}: ${value}${key === "height" ? "cm" : "g"}`}
                  </SelectedOptionListItem>
                ))}
          </SelectedOptionList>
        </SelectedOptionListContainer>
      ) : null}

      {stems ? (
        <SelectedOptionListContainer width={`30%`}>
          <CustomTextSpan text={`STEMS`} weight={`bold`} />
          <SelectedOptionList>
            {stems &&
              stems.map((stem, idx) => (
                <SelectedOptionListItem key={idx}>
                  {stem}
                </SelectedOptionListItem>
              ))}
          </SelectedOptionList>
        </SelectedOptionListContainer>
      ) : null}
    </SelectedOptionDetailsListsContainer>
  </SelectedOptionDetailsContainer>
);

export default SelectedOptionDetails;
