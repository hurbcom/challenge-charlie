import styled from 'styled-components'
import { Container, Text } from '../../UI'
import { WeatherAnotherDayBox } from '../WeatherAnotherDay/WeatherAnotherDay.styles'

export const WeatherTodayContainer = styled(Container)`
  min-height: 160px;
  height: initial;
`
export const WeatherTodayBox = WeatherAnotherDayBox

export const Icon = styled.div`
  min-width: 50px;
  padding: 16px 0;
  @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    max-width: 220px;
  }
  @media (max-width: ${(props) =>
      props.theme.breakpoint.xs}) or (orientation: landscape) {
    font-size: 0.875rem;
    max-width: 160px;
  }
`

export const Day = styled(Text)`
  width: 100%;
  font-size: 1.5rem;
  line-height: initial;
  @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    font-size: 1rem;
  }
  @media (max-width: ${(props) =>
      props.theme.breakpoint.xs}) or (orientation: landscape) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`

export const Temperature = Text

export const DayFeeling = styled(Text)`
  padding: 10px 0;
`

export const OtherInfo = styled(Text)`
  font-size: 1.5rem;
  line-height: initial;
  @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    font-size: 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoint.xs}) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`
