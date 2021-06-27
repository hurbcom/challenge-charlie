import React from 'react';

import { WeatherProvider } from '@contexts/Weather';

import Layout from '@components/Layout';
import Weather from '@pages/Weather';

import '@theme/main.scss';

const App: React.FC = () => (
  <Layout>
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  </Layout>
);

export default App;

/**
 * @see https://gist.github.com/hcatlin/1027867
 */
