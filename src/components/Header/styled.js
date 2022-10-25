import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;
export const DivIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: black;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 0px 16px 16px 0px;
`;
export const InputText = styled.input`
  height: 47px;
  width: 240px;
  border-radius: 16px 0px 0px 16px;
  padding: 0 10px;
  color: black;
  font-size: 16px;
  @media (min-width: 375px) {
    width: 290px;
  }
  @media (min-width: 600px) {
    width: 500px;
  }
  @media (min-width: 1024px) {
    width: 535px;
  }
`;
