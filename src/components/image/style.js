import styled from 'styled-components';

export const Image = styled.img`
  height: 300px;
  width: 100%;
  grid-area: ${props => props.gridArea};
  background: ${props => props.theme.main.backgroundColor};
`
