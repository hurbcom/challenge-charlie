import styled from 'styled-components'
import settings from '../UI/Settings'

type Props = {
  color: string
}

export const TodayWrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  background: ${(p) => p.color};
  padding: 20px 60px;
  flex: 1;
`

export const TodayDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-width: 50%;

  @media screen and (max-width: ${settings.mobileBreakPoint}) {
    flex-direction: column;
  }
`

export const TodayWrapperIcon = styled.div`
  flex: 1;
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TodayWeather = styled.p`
  font-size: 40px;
  text-transform: capitalize;
  padding: 30px 0;

  @media screen and (max-width: ${settings.mobileBreakPoint}) {
    font-size: 30px;
  }
`

export const TodayDetailsWeather = styled.div`
  padding-bottom: 30px;
`

export const TodayDetailsWeatherItem = styled.p`
  font-size: 20px;
  padding: 5px 0;
  white-space: pre-wrap;

  @media screen and (max-width: ${settings.mobileBreakPoint}) {
    font-size: 18px;
  }
`
