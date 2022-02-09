import styled from 'styled-components'
import { Container } from '../../../UI'
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
  width: 90%;
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 26px;
  font-weight: bold;
  border: none;
  :focus {
    outline: none;
  }
`
