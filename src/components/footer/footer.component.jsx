import React from "react";

import {
  FooterContainer,
  FooterContent,
  FooterContact,
  FooterConnect,
  FooterCopyrightContainer,
} from "./footer.styles";

import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterContact>
        <h3>CONTACT US</h3>
        <div>
          <p> We're here for you 24 hours a day, 7 days a week.</p>
          <div className="contact-group">
            <div>
              <PhoneIcon />
              <a href="tel: 067115161">067115161</a>
            </div>
            <div>
              <MailIcon />
              <a href="mailto: stanciu_vasile@mail.ru">Email us</a>
            </div>
          </div>
        </div>
      </FooterContact>
      <FooterConnect>
        <h3>CONNECT</h3>
        <div>
          <a href="https://www.facebook.com">
            <FacebookIcon />
          </a>
          <a href="https://www.facebook.com">
            <TwitterIcon />
          </a>
          <a href="https://www.facebook.com">
            <InstagramIcon />
          </a>
        </div>
      </FooterConnect>
    </FooterContent>
    <FooterCopyrightContainer>
      <span>©2020 Gift Shop, Chișinău, MDA </span>
    </FooterCopyrightContainer>
  </FooterContainer>
);

export default Footer;
