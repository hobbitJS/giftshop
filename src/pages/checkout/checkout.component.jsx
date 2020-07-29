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

import {
  selectCartItems,
  selectTotalToPay,
} from "../../redux/cart/cart.selectors";

import { selectShowCheckoutModal } from "../../redux/checkout/checkout.selectors";

import CheckoutForm from "../../components/checkout-page-components/checkout-form/checkout-form.component";
import CheckoutItem from "../../components/checkout-page-components/checkout-item/checkout-item.component";
import CheckoutModal from "../../components/checkout-page-components/checkout-modal/checkout-modal.component";
import CustomTextSpan from "../../components/custom-text-span/custom-text-span.component";

const Checkout = ({ cartItems, showCheckoutModal, totalToPay }) => {
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

        <CustomTextSpan text={`Total: $${totalToPay}`} size={24} />
      </CheckoutItemsContainer>

      {showCheckoutModal ? <CheckoutModal /> : null}
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalToPay: selectTotalToPay,
  showCheckoutModal: selectShowCheckoutModal,
});

export default connect(mapStateToProps)(Checkout);
