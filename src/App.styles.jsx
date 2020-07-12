import styled from "styled-components";
import { device } from "./device";

export const ContentContainer = styled.div`
  @media ${device.mobileS} {
    margin-top: 120px;
    padding-bottom: 17.5rem;
  }

  @media ${device.tablet} {
    margin-top: 95px;
    padding-bottom: 11.5rem;
  }
`;
