import styled from 'styled-components'

export const WeatherHeaderContainer = styled.div`
  font-family: 'Trebuchet MS';
  color: rgb(126, 126, 124);
  background-color: rgba(243, 238, 236, 0.5);
  display: flex;
  align-items: center;
  text-align: center;
`

export const WeatherHeaderIcon = styled.div`
  min-width: 50px;
`

export const WeatherHeaderText = styled.div`
  width: 100%;
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
