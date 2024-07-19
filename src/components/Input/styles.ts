import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 8px;
`;

const InputField = styled.input`
  width: 100%;
  background: linear-gradient(#808080, #808080) center bottom 1px /
    calc(100% - 10px) 2px no-repeat;
  background-color: rgb(255, 255, 255, 0);
  border: none;
  margin-left: 8px;
  font-size: 24px;
  font-weight: 700;
  height: 32px;
  line-height: 8px;
  color: gray;
  &:focus {
    border: none;
    outline: none;
  }
`;

export { InputContainer, InputField };
