import { AppProps } from 'next/app';
import Head from 'next/head';
import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import store from '../src/app/store';
import { GlobalStyle } from '../src/theme/GlobalStyle';

import '../public/fonts/weather-icons.css';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Head>
      <title>Challenge Charlie</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default MyApp;
