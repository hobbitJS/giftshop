import React from "react";

import { BadgeContainer } from "./badge.styles";

const Badge = ({ status, text }) => (
  <BadgeContainer status={status}>{text || React.Children}</BadgeContainer>
);

export default Badge;
