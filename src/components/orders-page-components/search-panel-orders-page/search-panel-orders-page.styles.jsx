import styled from "styled-components";

export const SearchPanelContainer = styled.div``;

export const SearchPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RemoveButton = styled.div`
  order: 2;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #d893a2;
  border-radius: 5px;
  color: white;
  letter-spacing: 1px;
  padding: 5px;
  cursor: pointer;
`;

export const ItemsByQueryContainer = styled.div`
  width: 100%;
`;

export const ItemsByQueryCategory = styled.div`
  width: 100%;
  text-transform: uppercase;
  font-size: 18px;
  margin: 20px 0 10px 0;
  border-bottom: 1px solid lightgrey;
`;

export const ItemByQueryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const ItemByQueryTitle = styled.div`
  width: 35%;
  span {
    display: block;
  }
`;

export const ItemByQueryOptions = styled.select`
  width: 35%;
  max-height: 30px;
`;

export const AddItemButton = styled.button`
  width: 12%;
  max-height: 25px;
`;
