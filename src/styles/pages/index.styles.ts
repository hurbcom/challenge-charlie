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

export const Cities = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 0.8rem;

  overflow: hidden;

  flex-direction: column;

  background-color: #f2eeeb90;

  transition: all 0.2s;
`

export const Text = styled(C.Text)``

export const List = styled(C.List)`
  width: 100%;
  height: auto;

  gap: 1.6rem;
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled(C.ListItem)`
  width: max-content;
  height: auto;
  padding: 1.6rem;

  background-color: #d9d9d9;
`
