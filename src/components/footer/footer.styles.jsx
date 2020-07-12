import styled from "styled-components";
import { device } from "../../device";

export const FooterContainer = styled.div`
  @media ${device.mobileS} {
    height: 17.5rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: rgba(208, 208, 208, 0.5);
  }

  @media ${device.tablet} {
    height: 11.5rem;
  }
`;

export const FooterContent = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    h3 {
      margin: 15px 0;
    }
  }

  @media ${device.tablet} {
    flex-flow: row;
  }

  @media ${device.laptopL} {
    justify-content: space-between;
    max-width: 1110px;
  }
`;

export const FooterContact = styled.div`
  @media ${device.mobileS} {
    text-align: center;

    div > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
      margin: 5px 15px;

      svg {
        width: 25px;
        height: 25px;
      }

      a {
        margin: 5px;
      }
    }
  }
`;

export const FooterConnect = styled.div`
  @media ${device.mobile} {
    text-align: center;
    margin-bottom: 10px;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 25px;
        height: 25px;
        margin: 0 15px;
      }
    }
  }
`;

export const FooterCopyrightContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 0 0 5px 0;
    border-top: 1px solid grey;
  }
`;
