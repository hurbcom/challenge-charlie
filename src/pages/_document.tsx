import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Router from './_router';

ReactDOMClient.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
