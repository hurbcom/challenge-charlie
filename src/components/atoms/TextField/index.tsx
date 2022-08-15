import styled from 'styled-components';

const TextField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 18px;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.grayColor};
`;

export default TextField;
