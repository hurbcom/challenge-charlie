import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Content from './_content';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container as HTMLElement);
root.render(
  <BrowserRouter>
    <Content />
  </BrowserRouter>
);
