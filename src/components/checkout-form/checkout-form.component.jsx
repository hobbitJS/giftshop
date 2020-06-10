import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  updateCheckoutFormField,
  setOrderStart,
} from "../../redux/checkout/checkout.actions";

import { selectCheckoutFormData } from "../../redux/checkout/checkout.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import {
  CheckoutFormContainer,
  FormContainer,
  FormLabelInputContainer,
  FormLabel,
  FormInput,
} from "./checkout-form.styles";

import CustomTextSpan from "../custom-text-span/custom-text-span.component";
import CustomButton from "../custom-button/custom-button.component";

const CheckoutForm = ({ cartItems, formData, updateField, setOrderStart }) => {
  const inputs = [
    { inputName: "name", inputExample: "ex: Stanciu Vasile" },
    { inputName: "email", inputExample: "ex: vasile@gmail.com" },
    { inputName: "phone", inputExample: "ex: 067115161" },
    {
      inputName: "address",
      inputExample: "ex: str. Vlaicu Pircalab 24, ap. 4",
    },
  ];

  return (
    <CheckoutFormContainer>
      <CustomTextSpan size="20" weight="bold">
        To complete the order, please fill in the form below
      </CustomTextSpan>
      <FormContainer>
        {inputs.map(({ inputName, inputExample }, idx) => (
          <FormLabelInputContainer key={idx}>
            <FormLabel>
              {`${inputName}:`}
              <FormInput
                type="text"
                placeholder={inputExample}
                name={inputName}
                onChange={(e) => updateField(inputName, e.target.value)}
                value={formData[inputName]}
              ></FormInput>
            </FormLabel>
          </FormLabelInputContainer>
        ))}
      </FormContainer>
      <CustomButton
        isText
        width="80%"
        color="white"
        bgColor="black"
        bgColorHover="rgba(142,115,41,1)"
        onClick={() => setOrderStart({ formData, cartItems })}
      >
        Complete the order
      </CustomButton>
    </CheckoutFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  formData: selectCheckoutFormData,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (field, value) =>
    dispatch(updateCheckoutFormField(field, value)),
  setOrderStart: (data) => dispatch(setOrderStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
