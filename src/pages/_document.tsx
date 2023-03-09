import { Html, Head, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'

import { theme } from '~/styles/theme'

export default function Document() {
  console.log('Theme: ', theme.config.initialColorMode)

  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
