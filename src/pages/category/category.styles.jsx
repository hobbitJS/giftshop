import styled from "styled-components";
import { device } from "../../device";

export const CategoryPageContainer = styled.div`
  width: 100%;
`;

export const CategoryContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 100vw;
  }

  @media ${device.laptopL} {
    max-width: 1150px;
  }
`;
