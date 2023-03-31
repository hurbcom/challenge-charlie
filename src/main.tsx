import express from 'express';
import React from 'react';
import cors from 'cors';
import dotenv from 'dotenv';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import { webpack } from 'webpack';

import webpackDevMiddleware from 'webpack-dev-middleware';

dotenv.config({ path: './.env' });
const compiler = webpack(require('../webpack.config'));
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(webpackDevMiddleware(compiler));
}
import Router from './pages/_router';

app.use(cors());

// For client side rendering
app.use(express.static('./dist'));
app.use(express.static('./dist/client'));

const port = 3000;

app.use(['/', '/about', '/home'], (req, res) => {
  const { pipe } = renderToPipeableStream(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Charlie Challange</title>
        <script defer src="../client/bundle.js"></script>
        <link href="../styles.css" rel="stylesheet"></link>
      </head>
      <body>
        <div id="root">
          <StaticRouter location={req.url}>
            <Router />
          </StaticRouter>
        </div>
      </body>
    </html>,
    {
      onShellReady() {
        res.set('Content-Type', 'text/html');
        pipe(res);
      },
    }
  );
});

app.listen(port, () => {
  console.log(`\nRunning at ${port}\n`);
});
