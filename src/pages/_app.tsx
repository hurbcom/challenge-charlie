/**
 * Main app module, not meant to be changed.
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';

import Router from './_router';
import Container from './_document';

ReactDOMClient.hydrateRoot(
  document,
  <Container>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Container>
);
