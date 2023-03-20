import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  position: relative;

  width: 100vw;
  height: 100vh;

  justify-content: center;
`

export const Wrapper = styled(C.Flex)`
  z-index: 1;

  width: 100%;
  height: auto;
  max-height: 100vh;

  overflow-y: auto;

  align-items: center;
  justify-content: center;
`

export const Form = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 71.733rem;

  display: flex;
  flex-direction: column;
`
