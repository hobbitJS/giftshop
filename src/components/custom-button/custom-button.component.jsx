import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children || props.text}
  </CustomButtonContainer>
);

export default CustomButton;
