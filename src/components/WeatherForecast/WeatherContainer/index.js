import styled from 'styled-components'
// import { Container } from '../../../UI'

export const WeatherContainer = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > :first-child {
    flex: 0.7;
  }
  > :nth-child(2) {
    flex: 3;
  }
  > :nth-last-of-type(-n + 2) {
    flex: 1;
  }
`
