import styled from "styled-components";

export const SelectedOptionDetailsContainer = styled.div`
  padding-right: 40px;
  font-size: 1.2em;
  line-height: 1.6;
`;

export const SelectedOptionDescription = styled.div``;

export const SelectedOptionDetailsListsContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const SelectedOptionListContainer = styled.div`
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  margin-top: 20px;
`;

export const SelectedOptionList = styled.ul`
  padding: 0 0 0 20px;
`;

export const SelectedOptionListItem = styled.li``;
