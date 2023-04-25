import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

import Compass from '~/assets/svg/compass.js'

export const InputGroup = styled(C.InputGroup)`
  width: auto;
  height: auto;
`

export const InputLeftElement = styled(C.InputLeftElement)`
  width: auto;
  height: auto;
  padding: 1.6rem;
`

export const Icon = styled(Compass)`
  width: 100%;
  max-width: 7.533rem;
  height: auto;

  fill: #8a8987;

  @media (max-width: 767px) {
    max-width: 4.533rem;
  }
`

export const Input = styled(C.Input)`
  width: 100%;
  height: 10.733rem;
  padding: 1.6rem 1.6rem 1.6rem 10.733rem;

  border: none;
  border-radius: 0;

  font-weight: 500;
  font-size: 3.133rem;
  font-family: 'Roboto', sans-serif;

  color: #8a8987;
  background-color: #f2eeeb90;

  &:focus {
    border: none;
    box-shadow: none;
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media (max-width: 767px) {
    height: 7.733rem;
    padding-left: 7.733rem;

    font-size: 2.733rem;
  }
`
