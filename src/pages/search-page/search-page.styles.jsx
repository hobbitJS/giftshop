import styled from "styled-components";

export const SearchPageContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 1110px;
  margin: 0 auto;
`;

export const SearchPageCategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;
export const SearchPageCategoryTitle = styled.h2`
  text-transform: capitalize;
`;

export const SearchPageItemsByCategory = styled.div`
  width: 100%;
  display: flex;

  div {
    margin-right: 20px;
  }
`;

export const SearchPageNoResultMessage = styled.div``;
