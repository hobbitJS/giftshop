import React from "react";

import { QuoteContainer } from "./quote.styles";

const Quote = ({ children, ...props }) => (
  <QuoteContainer>
    <p>
      <span>{props.firstPart}</span>
      <span>{props.secondPart}</span>
    </p>
    {children}
  </QuoteContainer>
);

export default Quote;
