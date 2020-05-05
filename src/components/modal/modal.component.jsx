import React from "react";
import { connect } from "react-redux";

import {
  ModalOverlay,
  ModalContentContainerOverflow,
  ModalContentContainer,
  ModalContentHeader,
  ModalContent,
} from "./modal.styles";

import {
  hideDeliveryDetails,
  hideSubstitutionPolicy,
} from "../../redux/product/product.actions";

import { ReactComponent as XButton } from "../../assets/x-button.svg";

const Modal = ({ title, children, isShown, hideModal, component }) =>
  isShown ? (
    <ModalOverlay>
      <ModalContentContainerOverflow>
        <ModalContentContainer>
          <ModalContentHeader>
            <div className="modal-content-header-title">{title}</div>
            <div
              className="modal-x-button"
              onClick={() => {
                document.body.classList.remove("open-modal");
                hideModal(component);
              }}
            >
              <XButton />
            </div>
          </ModalContentHeader>
          <ModalContent>{children}</ModalContent>
        </ModalContentContainer>
      </ModalContentContainerOverflow>
    </ModalOverlay>
  ) : null;

const mapDispatchToProps = (dispatch) => ({
  hideModal: (component) => {
    switch (component) {
      case "deliveryDetails":
        return dispatch(hideDeliveryDetails());

      case "substitutionPolicy":
        return dispatch(hideSubstitutionPolicy());

      default:
        return;
    }
  },
});

export default connect(null, mapDispatchToProps)(Modal);
