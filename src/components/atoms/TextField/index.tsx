import styled from 'styled-components';

const TextField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 18px;
  padding: 0 18px;
  background-color: #fff;
  outline: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.grayColor};
`;

export default TextField;
