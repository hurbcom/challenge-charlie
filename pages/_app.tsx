import { AppProps } from 'next/app';
import Head from 'next/head';
import { FunctionComponent } from 'react';

import { GlobalStyle } from '../src/theme/GlobalStyle'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Head>
      <title>Challenge Charlie</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
