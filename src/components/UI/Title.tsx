import styled from 'styled-components'
import settings from './Settings'

type Props = {
  hasClick?: boolean
}

export const Title = styled.p<Props>`
  font-weight: bold;
  padding: 6px 0;
  font-size: 30px;
  cursor: ${(p: Props) => (p.hasClick ? 'pointer' : 'normal')};

  @media screen and (max-width: ${settings.mobileBreakPoint}) {
    font-size: 20px;
  }
`
