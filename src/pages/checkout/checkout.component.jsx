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

import CheckoutForm from "../../components/checkout-form/checkout-form.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = ({ cartItems }) => {
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
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Checkout);
