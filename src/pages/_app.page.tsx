import { useWindowWidth } from '@react-hook/window-size';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Toaster, ToastPosition } from 'react-hot-toast';

import { theme } from '~/styles/theme';
import { GlobalStyles } from '~/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  const windowWidth = useWindowWidth();

  const toasterPosition: ToastPosition = windowWidth <= 600 ? 'bottom-center' : 'top-right';

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Component {...pageProps} />

      <Toaster position={toasterPosition} />
    </ThemeProvider>
  );
}
