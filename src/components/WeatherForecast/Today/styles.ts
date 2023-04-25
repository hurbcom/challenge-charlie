import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  background-color: #f8ca0360;
`

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const ContentLeft = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 2.6rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 2.2rem;
  }
`

export const ContentRight = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 35.8rem;
  padding: 2.6rem 2.6rem 9rem;

  flex-direction: column;

  width: 100%;
  height: auto;

  @media (max-width: 767px) {
    padding: 2.2rem;
  }
`

export const ContentToday = styled(C.Flex)`
  width: 100%;
  height: 3.2rem;

  align-items: center;

  > h1 {
    width: 100%;

    font-weight: 500;
    font-size: 2.666rem;
    line-height: initial;

    @media (max-width: 767px) {
      text-align: center;
      font-size: 2.266rem;
    }
  }
`

export const ContentTemp = styled(C.Flex)`
  width: 100%;
  height: 3.9rem;
  margin-bottom: 3.8rem;

  align-items: center;
`

export const ContentWeatherDescription = styled(C.Flex)`
  width: 100%;
  height: 3.9rem;
  margin-bottom: 2.4rem;

  align-items: center;

  > h2 {
    width: 100%;

    font-size: 3.2rem;
    text-transform: capitalize;

    @media (max-width: 767px) {
      text-align: center;
      font-size: 2.8rem;
    }
  }
`

export const ContentMoreInformations = styled(C.Flex)`
  width: 100%;
  height: 2.8rem;
  align-items: center;

  > h3 {
    width: 100%;

    font-weight: 400;
    font-size: 2.266rem;
    line-height: initial;

    @media (max-width: 767px) {
      text-align: center;
      text-align: center;
      font-size: 1.866rem;
    }
  }
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;

  font-size: 3.2rem;
  text-transform: capitalize;

  @media (max-width: 767px) {
    text-align: center;
    font-size: 2.866rem;
  }
`

export const Text = styled(C.Text)`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`
