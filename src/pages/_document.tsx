import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';

import Router from './_router';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container)
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
