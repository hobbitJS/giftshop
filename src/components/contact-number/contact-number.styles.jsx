import styled, { css } from "styled-components";

const spanStyles = css`
  font-family: "Montserrat", sans-serif;
  color: #6d6d6d;
  margin: 0 2px;
`;

export const ContactNumberContainer = styled.div`
  height: 70px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    .phone-icon {
      height: 25px;
      width: 25px;
      margin-right: 10px;
    }
  }
`;

export const ContactPhoneCode = styled.span`
  font-size: 12px;
  ${spanStyles}
`;

export const ContactPhoneNumber = styled.span`
  font-size: 16px;
  ${spanStyles}
`;
