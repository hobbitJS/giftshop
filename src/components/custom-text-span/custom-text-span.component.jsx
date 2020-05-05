import React from "react";

import { CustomTextSpanContainer } from "./custom-text-span.styles";

const CustomTextSpan = ({ children, text, ...props }) => (
  <CustomTextSpanContainer {...props}>
    {children || text}
  </CustomTextSpanContainer>
);

export default CustomTextSpan;
