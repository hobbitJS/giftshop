import styled from "styled-components";

const detectBadgeColor = (status) => {
  switch (status) {
    case "all":
      return "white";

    case "new":
      return "#00cc44";

    case "processing":
      return "#ff4d88";

    case "processed":
      return "#00bfff";

    case "delivered":
      return "#0086b3";

    case "canceled":
      return "#ff5c33";
    default:
      return;
  }
};

export const BadgeContainer = styled.span`
  position: absolute;
  top: 5px;
  right: 15px;
  padding: 2px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  background-color: ${({ status }) => detectBadgeColor(status)};
`;
