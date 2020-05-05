import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  background-image: url(${({ image }) => `${image}`});
  background-position: center;
  background-origin: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  height: 740px;
`;

export const ProductOptionIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const ProductOptionIcon = styled.div`
  background-image: url(${({ image }) => `${image}`});
  background-position: center;
  background-origin: center;
  background-size: cover;
  background-repeat: none;
  width: 80px;
  height: 80px;
  margin: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ active }) => (active ? "3px 0 0 0 rgba(142,115,41,1)" : "")};

  &:hover {
    box-shadow: 3px 0 0 0 rgba(142, 115, 41, 1);
  }
`;

export const ProductOptionsContainer = styled.div`
  width: 400px;
  background-color: white;
  padding: 25px 40px;
`;

export const ProductOptions = styled.div``;

export const ProductOptionContainer = styled.div`
  display: flex;
  min-height: 82px;
  border: 1px solid lightgrey;
  margin-bottom: 15px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px rgb(142, 115, 41);
  }

  box-shadow: ${({ active }) => (active ? `0 0 0 2px rgb(142, 115, 41)` : "")};
`;

export const ProductOptionImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${({ image }) => `${image}`});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ProductOptionDescription = styled.div`
  padding: 0 15px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const ProductDetailsSection = styled.div`
  max-width: 1110px;
  margin: 40px auto 0 auto;
  display: flex;

  & > div {
    width: 50%;
  }
`;
