import { useWindowWidth } from '@react-hook/window-size';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Toaster, ToastPosition } from 'react-hot-toast';
import Head from 'next/head';

import { theme } from '~/styles/theme';
import { GlobalStyles } from '~/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  const windowWidth = useWindowWidth();

  const toasterPosition: ToastPosition = windowWidth <= 600 ? 'bottom-center' : 'top-right';

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

        <link rel="manifest" href="icon/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png" />

        <title>Weather App</title>
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />

      <Toaster position={toasterPosition} />
    </ThemeProvider>
  );
}
