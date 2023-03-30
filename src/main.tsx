import express from 'express';
import React from 'react';
import cors from 'cors';
import dotenv from 'dotenv';

import { renderToPipeableStream, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { webpack } from 'webpack';

import webpackDevMiddleware from 'webpack-dev-middleware';

import Content from './pages/_content';

dotenv.config({ path: './.env' });
const compiler = webpack(require('../webpack.config'));
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(webpackDevMiddleware(compiler));
}

app.use(cors());

// For client side rendering
app.use(express.static('./dist'));
app.use(express.static('./dist/client'));

const port = 3000;

app.get(['/', '/about'], (req, res) => {
  const stream = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <Content />
    </StaticRouter>
  );
  res.set('Content-Type', 'text/html');
  stream.pipe(res);
});

app.listen(port, () => {
  console.log(`\nRunning at ${port}\n`);
});
