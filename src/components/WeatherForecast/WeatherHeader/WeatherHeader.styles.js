import styled from 'styled-components'
import { Container } from '../../../UI'

export const WeatherHeaderContainer = styled(Container)`
  color: rgb(126, 126, 124);
  background-color: rgba(243, 238, 236, 0.92);
  height: initial;
`

export const WeatherHeaderIcon = styled.div`
  width: auto;
  margin-right: 8px;
`

export const WeatherHeaderText = styled.span`
  width: 100%;
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
