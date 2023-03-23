import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  justify-content: flex-end;

  background-color: #f8ca0380;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 2.6rem;
  max-width: 35.8rem;

  flex-direction: column;

  > h2 {
    font-weight: 500;
    font-size: 2.666rem;
    line-height: initial;
  }

  > p {
    font-weight: 400;
    font-size: 3.6rem;
    line-height: initial;
  }

  @media (max-width: 767px) {
    padding: 2.2rem;

    > h2,
    > p {
      text-align: center;
    }

    > h2 {
      font-size: 2.266rem;
    }

    > p {
      font-size: 3.2rem;
    }
  }
`

export const Text = styled(C.Text)`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`
