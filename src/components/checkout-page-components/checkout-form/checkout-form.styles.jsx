import styled from "styled-components";

export const CheckoutFormContainer = styled.div`
  text-align: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 20px 0;

  button {
    margin-top: 10px;
  }
`;

export const FormLabelInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
  position: relative;
`;

export const FormLabel = styled.label`
  width: 20%;
  text-align: left;
  text-transform: capitalize;
`;

export const FormInput = styled.input`
  width: 80%;
  padding: 10px 10px;
  border: 1px solid #d893a2;
  border-radius: 5px;
  outline: none;
  position: absolute;
  right: 0;

  &:focus {
    border: 2px solid #d180a1;
  }
`;
