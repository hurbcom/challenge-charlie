import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 10rem;

  justify-content: flex-end;

  background-color: #f8ca0380;
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
`

export const Text = styled(C.Text)`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`
