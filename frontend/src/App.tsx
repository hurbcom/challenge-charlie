import React from 'react';

import Layout from '@components/Layout';
import Home from '@pages/Home';

import '@theme/main.scss';

const App: React.FC = () => (
  <Layout>
    <Home />
  </Layout>
);

export default App;

/**
 * @see https://gist.github.com/hcatlin/1027867
 */
