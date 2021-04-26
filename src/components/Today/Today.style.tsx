import styled from 'styled-components'

export const TodayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(143, 143, 143, 0.15);
  padding: 20px 60px;
  flex: 1;
`

export const TodayDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-width: 50%;
`

export const TodayWrapperIcon = styled.div`
  flex: 1;
  min-width: 50%;
`

export const TodayWeather = styled.p`
  font-size: 40px;
  text-transform: capitalize;
  padding: 30px 0;
`

export const TodayDetailsWeather = styled.div`
  padding-bottom: 30px;
`

export const TodayDetailsWeatherItem = styled.p`
  font-size: 20px;
  padding: 5px 0;
`
