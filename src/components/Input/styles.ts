import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

import Compass from '~/assets/svg/compass.js'

export const InputGroup = styled(C.InputGroup)``

export const InputLeftElement = styled(C.InputLeftElement)`
  width: auto;
  padding: 1.6rem;
  height: -webkit-fill-available;
`

export const Icon = styled(Compass)`
  width: 100%;
  max-width: 7.533rem;
  height: auto;

  fill: #8a8987;
`

export const Input = styled(C.Input)`
  width: 100%;
  height: 10.733rem;
  padding: 1.6rem 1.6rem 1.6rem 10.733rem;

  border: none;
  border-radius: 0;

  font-weight: 500;
  font-size: 4.133rem;
  font-family: 'Roboto', sans-serif;

  color: #8a8987;
  background-color: #f2eeeb90;

  &:focus {
    border: #8a8987;
    box-shadow: 0 0 0 1px #8a8987;
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
