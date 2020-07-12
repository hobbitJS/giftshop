import styled from "styled-components";
import { device } from "../../device";

export const HomeContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
