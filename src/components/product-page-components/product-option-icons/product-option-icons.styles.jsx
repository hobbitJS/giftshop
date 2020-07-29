import styled from "styled-components";
import { device } from "../../../device";

export const ProductOptionIconsContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  @media ${device.tablet} {
    right: auto;
    bottom: 10px;
    left: 20px;
  }
`;

export const OptionIcon = styled.div`
  @media ${device.mobileS} {
    background-image: url(${({ image }) => `${image}`});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 80px;
    height: 80px;
    margin: 2px;
    transition: all 0.2s ease;
    box-shadow: ${({ active }) =>
      active ? "3px 0 0 0 rgba(142,115,41,1)" : ""};
  }

  @media ${device.laptop} {
    cursor: pointer;

    &:hover {
      box-shadow: 3px 0 0 0 rgba(142, 115, 41, 1);
    }
  }
`;
