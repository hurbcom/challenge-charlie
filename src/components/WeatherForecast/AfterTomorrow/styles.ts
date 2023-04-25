import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  justify-content: flex-end;

  background-color: #b7940480;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 2.1rem;
  max-width: 35.8rem;

  flex-direction: column;

  @media (max-width: 767px) {
    padding: 2.2rem;
  }
`

export const ContentAfterTomorrow = styled(C.Flex)`
  width: 100%;
  height: 3.2rem;

  align-items: center;

  > h2 {
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
  height: 4.3rem;

  align-items: center;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;

  font-weight: 400;
  font-size: 3.6rem;
  line-height: initial;

  @media (max-width: 767px) {
    font-size: 3.2rem;
    text-align: center;
  }
`

export const Text = styled(C.Text)`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`
