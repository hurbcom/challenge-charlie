import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '~/styles/global';
import { theme } from '~/styles/theme';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Component {...pageProps} />

      <Toaster position="top-right" />
    </ThemeProvider>
  );
}
