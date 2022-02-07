import styled from 'styled-components'
import { Container, Text } from '../../../UI'
import { WeatherAnotherDayBox } from '../WeatherAnotherDay/WeatherAnotherDay.styles'

export const WeatherTodayContainer = styled(Container)`
  min-height: 160px;
`
export const WeatherTodayBox = WeatherAnotherDayBox

export const Icon = styled.div`
  min-width: 50px;
  padding: 16px 0;
`

export const Day = styled(Text)`
  width: 100%;
  font-size: 0.75rem;
`

export const Temperature = Text

export const DayFeeling = styled(Text)`
  padding: 10px 0;
`

export const OtherInfo = styled(Text)`
  font-size: 0.75rem;
`
