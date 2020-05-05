import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 299;
`;

export const ModalContentContainerOverflow = styled.div`
  max-height: 600px;
  max-width: 780px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: white;
  padding: 48px;
`;

export const ModalContentContainer = styled.div`
  height: 90%;
`;

export const ModalContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .modal-content-header-title {
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
  }

  .modal-x-button {
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  height: 100%;
  margin-top: 20px;
  padding-right: 35px;
  overflow: hidden auto;
  display: block;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 1px;
    border-radius: 4px;
  }
`;
