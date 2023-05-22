import styled, { css } from 'styled-components'
import mediaQueries from '../../assets/styles/media-queries'

export const Details = styled.article<{ color: string }>`
  ${({ color }) => `background-color: ${color};`}
  align-items: center;
  background-position: center;
  color: white;
  display: flex;
`

const Image = css`
  img {
    width: 100%;
  }

`

export const WeatherImage = styled.div`
  margin: 3%;
  min-height: 15em;
  width: 52%;

  @media (max-width: ${mediaQueries.small}) {
    min-height: auto;
    height: auto;
    width: 40%;
  }

  ${Image}
`

export const Simple = styled.article<{ color: string }>`
  ${({ color }) => `background-color: ${color};`}
  align-items: center;
  color: white;
  display: flex;
  justify-content: flex-end;
  min-height: 2.25em;
`

export const SimpleImage = styled.div`
  height: 4em;
  min-height: inherit;
  width: 4em;

  ${Image}
`

export const Info = styled.div`
  padding: 0.75em 1.5em 1.5em 1.5em;
  width: 45%;

  @media (max-width: ${mediaQueries.small}) {
    width: 50%;
  }
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
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`

export const WeatherText = styled.span`
  display: block;
  font-size: 1.4em;
  margin-bottom: 0.75em;
  text-transform: capitalize;
`
