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

  svg {
    position: absolute;
    height: 100%;
    margin-left: 10px;
  }
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
