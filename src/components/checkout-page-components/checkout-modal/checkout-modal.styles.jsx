import styled from "styled-components";

export const CheckoutModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(216, 147, 162, 0.35);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const CheckoutNotificationContainer = styled.div`
  width: 400px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const CheckoutNotificationImageContainer = styled.div`
  width: 100px;
  height: 100px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutNotificationMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  svg {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
`;
