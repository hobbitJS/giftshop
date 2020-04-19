import styled from "styled-components";

export const LoadingOverlayContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 999;
  background-color: rgba(216, 147, 162, 0.35);

  div {
    align-self: center;
  }
`;
