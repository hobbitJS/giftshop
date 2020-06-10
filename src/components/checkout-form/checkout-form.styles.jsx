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
  /*experimental*/
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* width: 30%; */
  text-transform: capitalize;
`;

export const FormInput = styled.input`
  outline: none;

  /*experimental*/
  width: 80%;

  /* width: 70%; */
  padding: 10px 10px;
  border-color: #d893a2;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;

  &:focus {
    border-color: #d893a9;
  }
`;
