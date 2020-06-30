import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginOverlayContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #eee;
  display: flex;
  justify-content: center;
`;

export const LoginFormContainer = styled.div`
  width: 650px;
`;

export const LogoContainer = styled(Link)`
  width: 60px;
  height: 60px;
  margin: 20px auto;
  display: block;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const FormContainer = styled.form`
  background-color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px 6%;

  h2 {
    font-size: 18px;
    margin-bottom: 18px;
  }

  button {
    height: 35px;
    line-height: 35px;
  }
`;

export const FormLabel = styled.label`
  width: 63%;
  margin: 0 auto 19px;
  text-transform: uppercase;
  font-weight: 700;
  color: #767676;
  letter-spacing: 2px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 45px;
  display: block;
  margin-top: 11px;
  padding: 0 10px;
  border: 1px solid #767676;
  border-radius: 0;
  transition: all 0.2s ease;

  &:focus {
    border: 1px solid lightblue;
    outline: none;
    box-shadow: 0px 0px 10px lightblue;
  }

  &:focus::placeholder {
  }
`;

export const SignInButton = styled.input`
  height: 45px;
  min-width: 200px;
  width: 55%;
  border: none;
  background-color: #2d2d2d;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 2px;
  cursor: pointer;
`;
