import styled from 'styled-components'
import { Container } from '../../UI'
import { EditText } from 'react-edit-text'

export const WeatherHeaderContainer = styled(Container)`
  color: rgb(126, 126, 124);
  background-color: rgba(243, 238, 236, 0.92);
  height: initial;
`

export const WeatherHeaderIcon = styled.div`
  width: auto;
  margin-right: 8px;
`

export const WeatherHeaderInputText = styled(EditText)`
  width: 85%;
  text-align: start;
  font-size: 1.625rem;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border: none;
  @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoint.xs}) {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
`
