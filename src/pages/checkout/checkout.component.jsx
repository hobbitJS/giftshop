import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CheckoutContainer,
  CheckoutItemsContainer,
  CheckoutFormContainer,
  CheckoutItemsHeader,
  CheckoutItemsHeaderBlock,
} from "./checkout.styles";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectShowCheckoutModal } from "../../redux/checkout/checkout.selectors";

import CheckoutForm from "../../components/checkout-form/checkout-form.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

// refactor all component !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import CheckoutModal from "../../components/checkout-modal/checkout-modal.component";

const Checkout = ({ cartItems, showCheckoutModal }) => {
  const titles = ["Product", "Description", "Quantity", "Price", "Remove"];

  return (
    <CheckoutContainer>
      <CheckoutFormContainer>
        <CheckoutForm />
      </CheckoutFormContainer>
      <CheckoutItemsContainer>
        <CheckoutItemsHeader>
          {titles.map((title, idx) => (
            <CheckoutItemsHeaderBlock key={idx}>
              {title}
            </CheckoutItemsHeaderBlock>
          ))}
        </CheckoutItemsHeader>
        {cartItems.map((cartItem, idx) => (
          <CheckoutItem item={cartItem} key={idx} />
        ))}
      </CheckoutItemsContainer>

      {showCheckoutModal ? <CheckoutModal /> : null}
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  showCheckoutModal: selectShowCheckoutModal,
});

export default connect(mapStateToProps)(Checkout);
