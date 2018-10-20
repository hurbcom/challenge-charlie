import styled from 'styled-components';


const InputBox = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: 20px;
  outline: none;
  width: 100%;
  text-align: center;
`;


export default InputBox;
