import styled from 'styled-components'

const Text = styled.span`
  font-size: 2rem;
  font-weight: bold;
  line-height: initial;
  @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    font-size: 1.25rem;
    line-height: 1rem;
    letter-spacing: 0.0625rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoint.xs}) {
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0.0625rem;
  }
`

export default Text
