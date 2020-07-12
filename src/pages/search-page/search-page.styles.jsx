import styled from "styled-components";
import { device } from "../../device";

export const SearchPageContainer = styled.div`
  @media ${device.mobileS} {
    width: 100vw;
    display: flex;
    flex-flow: column;
    margin: 0 auto;
  }

  @media ${device.laptopL} {
    max-width: 1110px;
  }
`;

export const SearchPageCategoryContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    display: flex;
    flex-flow: column;
  }
`;
export const SearchPageCategoryTitle = styled.h2`
  @media ${device.mobileS} {
    text-transform: capitalize;
    padding: 0 20px;
  }
`;

export const SearchPageItemsByCategory = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const SearchPageNoResultMessage = styled.div``;
