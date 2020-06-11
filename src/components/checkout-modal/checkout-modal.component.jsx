import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsLoading,
  selectError,
} from "../../redux/checkout/checkout.selectors";

import {
  hideCheckoutModal,
  clearCheckoutForm,
} from "../../redux/checkout/checkout.actions";
import { clearItems } from "../../redux/cart/cart.actions";

import {
  CheckoutModalContainer,
  CheckoutNotificationContainer,
  CheckoutNotificationImageContainer,
  CheckoutNotificationMessageContainer,
} from "./checkout-modal.styles";

import { ReactComponent as Moth } from "../../assets/checkout-notification/moth.svg";
import { ReactComponent as Ladybird } from "../../assets/checkout-notification/ladybird.svg";
import { ReactComponent as Rainbow } from "../../assets/checkout-notification/rainbow.svg";
import { ReactComponent as Wind } from "../../assets/checkout-notification/wind.svg";

import Spinner from "../spinner/spinner.component";
import CustomTextSpan from "../custom-text-span/custom-text-span.component";
import CustomButton from "../custom-button/custom-button.component";

const CheckoutModal = ({
  isLoading,
  error,
  hideCheckoutModal,
  clearCart,
  clearForm,
}) => (
  <CheckoutModalContainer>
    {isLoading ? (
      <Spinner />
    ) : (
      <CheckoutNotificationContainer>
        <CheckoutNotificationImageContainer>
          {error ? <Moth /> : <Ladybird />}
        </CheckoutNotificationImageContainer>
        <CheckoutNotificationMessageContainer>
          {error ? <Wind /> : <Rainbow />}
          <CustomTextSpan size={18}>
            {error
              ? `Oops! Something went wrong ...`
              : `Success! Our florists will contact you soon ...`}
          </CustomTextSpan>
        </CheckoutNotificationMessageContainer>
        {error ? (
          <CustomButton
            isText
            text={`Retry`}
            onClick={() => hideCheckoutModal()}
          />
        ) : (
          <Link to="/">
            <CustomButton
              isText
              text={`Back to Main Page`}
              onClick={() => {
                clearCart();
                clearForm();
                hideCheckoutModal();
              }}
            />
          </Link>
        )}
      </CheckoutNotificationContainer>
    )}
  </CheckoutModalContainer>
);

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  hideCheckoutModal: () => dispatch(hideCheckoutModal()),
  clearForm: () => dispatch(clearCheckoutForm()),
  clearCart: () => dispatch(clearItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);
