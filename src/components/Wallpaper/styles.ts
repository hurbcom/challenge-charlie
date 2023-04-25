import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  z-index: 0;
  position: absolute;

  width: 100%;
  height: 100%;
  min-height: 100vh;
`

export const Gradient = styled(C.Flex)`
  top: 0;
  left: 0;
  position: absolute;

  width: 100%;
  height: 100%;
  min-height: 100vh;
`
export const Image = styled(C.Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
`
