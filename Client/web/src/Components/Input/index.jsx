import styled from 'styled-components';

import colors from '../../Styles/colors';

export const Input = styled.input`
  height: 50px;
  background-color: ${colors.white};
  border: none;
  box-shadow: none;
  outline: none;
  color: ${colors.gray};
  font-size: 30px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
