import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  justify-content: center;
`

export const Wrapper = styled(C.Flex)`
  z-index: 1;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  overflow: auto;

  align-items: center;
  justify-content: center;

  @media (min-width: 361px) {
    padding: 1.6rem;
  }
`

export const Form = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 71.733rem;

  display: flex;
  flex-direction: column;
`
