import React from 'react';
import Head from 'next/head';
import { GlobalStyles } from 'components/Layout/GlobalStyles';

import 'lib/weather-icons.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=550, initial-scale=0.7" className="next-head" />
        <link href="https://fonts.googleapis.com/css2?family=Signika:wght@300;400&display=swap" rel="stylesheet" />
        <title>Challenge Hurb</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
