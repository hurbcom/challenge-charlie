import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Challenge Charlie</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
