import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';

import Router from './_router';
import App from './_app';

const container = document.getElementById('root') as HTMLElement;
ReactDOMClient.hydrateRoot(
  document,
  <App>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </App>
);

export default App;
