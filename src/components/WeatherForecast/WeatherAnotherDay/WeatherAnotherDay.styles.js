import styled from 'styled-components'
import { Text, Container } from '../../../UI'

export const WeatherAnotherDayContainer = Container

export const WeatherAnotherDayBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  &:first-child {
    flex: 3;
    align-items: center;
  }
  align-self: flex-start;
  text-align: start;
`

export const Day = styled(Text)`
  width: 100%;
  font-size: 1.5rem;
  line-height: initial;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 414px) {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

export const Temperature = Text
