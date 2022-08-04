import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
