import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding-left: 10px;
  height: 50px;
  box-sizing: border-box;
  ::placeholder {
    font-size: 16px;
  }
  border-radius: 10px;
  border-style: none;
`;

const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export { Input, InputContainer, Error };