import React from "react";

import { ReactComponent as PhoneIcon } from "../../assets/phone-call.svg";

import {
  ContactNumberContainer,
  ContactPhoneCode,
  ContactPhoneNumber
} from "./contact-number.styles";

const ContactNumber = () => (
  <ContactNumberContainer>
    <a href="tel:+(373)67115161" title="Call us">
      <PhoneIcon class="phone-icon" />
      <ContactPhoneCode>+(373)</ContactPhoneCode>
      <ContactPhoneNumber>67 11 51 61</ContactPhoneNumber>
    </a>
  </ContactNumberContainer>
);

export default ContactNumber;
