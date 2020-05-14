import styled from "styled-components";

export const CustomTextSpanContainer = styled.span`
  display: block;
  font-family: ${({ family }) => (family ? `${family}, sans-serif` : "")};
  font-size: ${({ size }) => (size ? `${size}px` : "")};
  height: ${({ height }) => (height ? `${height}px` : "")};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : "")};
  font-weight: ${({ weight }) => (weight ? `${weight}` : "")};
  text-transform: ${({ transform }) => (transform ? `${transform}` : "")};
  margin: ${({ margin }) => (margin ? `${margin}` : "")};
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : "")};
  color: ${({ color }) => (color ? `${color}` : `black`)};
  cursor: ${({ cursor }) => (cursor ? `${cursor}` : `default`)};
`;
