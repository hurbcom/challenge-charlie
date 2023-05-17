import styled from 'styled-components'

export const Details = styled.article<{ color: string }>`
  ${({ color }) => `background-color: ${color};`}
  background-position: center;
  color: white;
  display: flex;

  img {
    margin: 3%;
    min-height: 15em;
    width: 52%;
  }
`

export const Simple = styled.article<{ color: string }>`
  ${({ color }) => `background-color: ${color};`}
  align-items: center;
  color: white;
  display: flex;
  justify-content: flex-end;
  min-height: 2.25em;

  img {
    height: 4em;
    margin: auto 5em;
    width: 4em;
  }
`

export const Info = styled.div`
  padding: 0.75em 1.5em 1.5em 1.5em;
  width: 45%;
`

export const Temperature = styled.div`
  margin-bottom: 2em;
`

export const WeatherInfo = styled.div`
  p {
    margin-bottom: 0.5em;
  }
`

export const Day = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  margin-bottom: 0.5em;
  text-transform: uppercase;
`

export const WeatherText = styled.span`
  display: block;
  font-size: 1.4em;
  margin-bottom: 0.75em;
  text-transform: capitalize;
`
