import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  updateCheckoutFormField,
  setOrderStart,
  showCheckoutModal,
} from "../../../redux/checkout/checkout.actions";

import { selectCheckoutFormData } from "../../../redux/checkout/checkout.selectors";
import { selectCartItems } from "../../../redux/cart/cart.selectors";

import {
  CheckoutFormContainer,
  FormContainer,
  FormLabelInputContainer,
  FormLabel,
  FormInput,
} from "./checkout-form.styles";

import CustomTextSpan from "../../custom-text-span/custom-text-span.component";
import CustomButton from "../../custom-button/custom-button.component";

const CheckoutForm = ({
  cartItems,
  formData,
  updateField,
  setOrderStart,
  showCheckoutModal,
}) => {
  const inputs = [
    {
      type: "text",
      pattern: "^[a-zA-Z]+( [a-zA-Z]+)$",
      name: "name",
      example: "ex: Stanciu Vasile",
    },
    {
      type: "email",
      pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      name: "email",
      example: "ex: vasile@gmail.com",
    },
    {
      type: "tel",
      pattern: "[0-9]{9}",
      name: "phone",
      example: "ex: 067115161",
    },
    {
      type: "text",
      pattern: "^[a-zA-Z0-9]+( [a-zA-Z0-9]+)*$",
      name: "address",
      example: "ex: Vlaicu Pircalab 28, ap. 7",
    },
  ];

  const submitForm = (e) => {
    e.preventDefault();
    setOrderStart({ formData, cartItems });
    showCheckoutModal();
  };

  return (
    <CheckoutFormContainer>
      <CustomTextSpan
        size="20"
        weight="bold"
        text={"To complete the order, please fill in the form below"}
      />

      <FormContainer onSubmit={(e) => submitForm(e)}>
        {inputs.map(({ type, pattern, name, example }, idx) => (
          <FormLabelInputContainer key={idx}>
            <FormLabel>{`${name}:`}</FormLabel>
            <FormInput
              type={type}
              placeholder={example}
              onChange={(e) => updateField(name, e.target.value)}
              value={formData[name]}
              pattern={pattern}
              required
            />
          </FormLabelInputContainer>
        ))}
        <CustomButton
          blackButton
          isText
          type="submit"
          text={"Complete the order"}
        />
      </FormContainer>
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
  showCheckoutModal: () => dispatch(showCheckoutModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
