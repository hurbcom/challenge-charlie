import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import App from './components/molecules/App';

import './theme/reset.css';

Sentry.init({
  // for real life use as environment variable separated by development and production
  dsn: 'https://5443556fb7f541788152ce513b1d2c04@o1377362.ingest.sentry.io/6688079',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root'),
);
