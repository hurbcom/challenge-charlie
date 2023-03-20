import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  colors: {
    customBlue: '#4299E190',
    customGray: '#A0AEC090',
    customRed: '#F5656590',
    customYellow: '#ECC94B90',
  },
  styles: {
    global: {
      html: {
        fontSize: '62.5%',
      },
    },
  },
})
