import styled from 'styled-components'

export const Container = styled.section<{ url: string }>`
  ${({ url }) => `background-image: url(${url});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  
  &::after {
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`

export const Content = styled.section`
  border-radius: 1em;
  width: 30em;
  z-index: 2;
`

export const GpsIcon = styled.img`
  height: 2.5em;
  margin: 0.5em;
  position: absolute;
  width: 2.5em;
`
