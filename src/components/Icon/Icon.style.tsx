import styled from 'styled-components'
import settings from '../UI/Settings'

export const IconWrapper = styled.div`
  svg {
    height: 300px;
    width: 300px;
  }

  @media screen and (max-width: ${settings.tabletBreakPoint}) {
    svg {
      height: 150px;
      width: 150px;
    }
  }

  @media screen and (max-width: ${settings.mobileBreakPoint}) {
    svg {
      height: 80px;
      width: 80px;
    }
  }
`
