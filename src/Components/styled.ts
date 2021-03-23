import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  width: 65%;
  background-color: #ddddddaa;
  box-sizing: border-box;
`;

export const SearchBarArea = styled.div`
  height: 10%;
  position: relative;
  /* 
  .input-icons {
    width: 100%;
    margin-bottom: 10px;
  } */

  /* .input-field {
    width: 100%;
    padding: 10px;
    text-align: center;
  } */

  input {
    background-color: #ffffffaa;
    width: 100%;
    padding: 0 2px 2px 70px;
    height: 100%;
    border: 0;
    outline: unset;
    font-size: 35px;
    //padding-left: 70px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  height: 100%;
  padding: 5px;

  svg {
    height: 100%;
    /* width: 70px; */
    font-size: 55px;
    /* margin-left: 5px;
    /* position: absolute;
    height: 100%;
    font-size: 40px; */
    //margin-left: 10px;
  }
`;
export const DropdownItem = styled.div<{ selectable?: boolean }>`
  cursor: ${({ selectable }) => (selectable ? "pointer" : "auto")};
  padding: 8px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
