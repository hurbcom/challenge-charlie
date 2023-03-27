import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

import Sun from '~/assets/svg/sun.js'

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

export const Icon = styled(Sun)`
  width: 100%;
  height: auto;
  max-width: 27.733rem;

  fill: #ffffff;

  @media (max-width: 767px) {
    max-width: 20.733rem;
  }
`

export const ContentRight = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 35.8rem;
  padding: 2.6rem 2.6rem 9rem;

  flex-direction: column;

  > h1 {
    font-weight: 500;
    font-size: 2.666rem;
    line-height: initial;
  }

  > h2 {
    margin-bottom: 3.8rem;

    font-weight: 400;
    font-size: 3.266rem;
    line-height: initial;
  }

  > h2:last-of-type {
    margin-bottom: 2.4rem;

    font-size: 3.2rem;
  }

  > h3 {
    font-weight: 400;
    font-size: 2.266rem;
    line-height: initial;
  }

  @media (max-width: 767px) {
    padding: 2.2rem;

    > h1,
    > h2,
    > h3 {
      text-align: center;
    }

    > h1 {
      font-size: 2.266rem;
    }

    > h2 {
      font-size: 2.866rem;
    }

    > h2:last-of-type {
      font-size: 2.8rem;
    }

    > h3 {
      font-size: 1.866rem;
    }
  }
`

export const Text = styled(C.Text)`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`
