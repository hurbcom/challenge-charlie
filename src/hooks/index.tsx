import { ReactNode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { LocationContextProvider } from '~/contexts/LocationContext'

import { theme } from '~/styles/theme'

interface AppProviderProps {
  children?: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      <LocationContextProvider>{children}</LocationContextProvider>
    </ChakraProvider>
  )
}
