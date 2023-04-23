import styled from 'styled-components';

export const Input = styled.input`
  color: #c1c1c1;
  font-size: 22px;
  grid-area: ${props => props.gridArea};
  padding: 10px;
  border-radius: 4px 4px 0 0;
  border: solid 1px transparent;
  background-color: #e5e8e8;
  color: #515a5a;
  font-weight: 600;
  outline: none;
  transition: all 350ms ease;

  &:focus {
    border: solid 1px ${props => props.theme.main.backgroundColor};
    border-bottom: solid 1px transparent;
  }
`
