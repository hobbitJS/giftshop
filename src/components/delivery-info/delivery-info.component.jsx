import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectShowDeliveryDetails,
  selectShowSubstitutionPolicy,
} from "../../redux/product/product.selectors";

import { DeliveryInfoContainer } from "./delivery-info.styles";

import InfoDetails from "./info-details/info-details.component";
import DeliveryDetails from "./delivery-details/delivery-details.component";
import SubstitutioPolicy from "./substitution-policy/substitution-policy.component";
import Modal from "../modal/modal.component";

const DeliveryInfo = ({
  isShownDeliveryDetails,
  isShownSubstitutionPolicy,
}) => (
  <DeliveryInfoContainer>
    <InfoDetails />

    <Modal
      title={`Delivery, Service, and Shipping Policy`}
      isShown={isShownDeliveryDetails}
      component="deliveryDetails"
    >
      <DeliveryDetails />
    </Modal>

    <Modal
      title={`Substitution Policy`}
      isShown={isShownSubstitutionPolicy}
      component="substitutionPolicy"
    >
      <SubstitutioPolicy />
    </Modal>
  </DeliveryInfoContainer>
);

const mapStateToProps = () =>
  createStructuredSelector({
    isShownDeliveryDetails: selectShowDeliveryDetails,
    isShownSubstitutionPolicy: selectShowSubstitutionPolicy,
  });
export default connect(mapStateToProps)(DeliveryInfo);
