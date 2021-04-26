import styled from 'styled-components'

type Props = {
  hasClick?: boolean
}

export const Title = styled.p<Props>`
  font-weight: bold;
  padding: 6px 0;
  font-size: 30px;
  cursor: ${(p: Props) => (p.hasClick ? 'pointer' : 'normal')};
`
