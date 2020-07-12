import styled from "styled-components";

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  margin: 20px 0;
`;

export const FormLabelInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const FormLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`;

export const FormInput = styled.input`
  outline: none;
  width: 80%;
  padding: 10px 10px;
  border-color: #d893a2;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;

  &:focus {
    border-color: #d893a9;
  }
`;
