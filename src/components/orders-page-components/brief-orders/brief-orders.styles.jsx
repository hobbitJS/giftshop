import styled from "styled-components";

export const BriefOrdersContainer = styled.div`
  width: 25%;
  height: ${({ length }) => (length > 0 ? `${length * 97}px` : 0)};
  max-height: 715px;
  display: flex;
  flex-flow: column;
  border: ${({ length }) => (length > 0 ? "1px solid grey" : "none")};
  border-right: none;

  ${({ length }) => (length > 7 ? "overflow-y: scroll" : null)};

  .loadingio-spinner-spin-znprxbqdws {
    align-self: center;
    position: absolute;
    top: 35%;
  }
`;

export const BriefOrder = styled.div`
  width: 100%;
  padding: 0 20px;
  cursor: pointer;
  border-bottom: 1px solid grey;
  transition: all 0.3s ease;
  position: relative;

  &:last-of-type {
    border: none;
  }

  &:hover {
    background-color: #d893a2;
  }

  ${({ active }) =>
    active ? `{background-color: #d893a2}` : `{background-color: lightgrey}`}

  & > span {
    display: block;
    padding: 5px;
  }
`;
