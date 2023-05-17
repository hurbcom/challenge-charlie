import styled from 'styled-components'
import colors from '../../assets/styles/colors'

export const Input = styled.input`
  background-color: ${colors.white};
  border: none;
  color: ${colors.gray};
  font-size: 1.5em;
  padding: 0.5em 1em 0.5em 3em;
  width: 100%;

  &::placeholder {
    color: ${colors.gray};
  }
`
