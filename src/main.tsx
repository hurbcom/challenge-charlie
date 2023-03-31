import express from 'express';
import React from 'react';
import cors from 'cors';
import dotenv from 'dotenv';

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

import Container from './pages/_document';
import Router from './pages/_router';

app.use(cors());

// For client side rendering
app.use(express.static('./dist'));
app.use(express.static('./dist/client'));

const port = 3000;

app.use(['/', '/about', '/home'], (req, res) => {
  const { pipe } = renderToPipeableStream(
    <Container>
      <StaticRouter location={req.url}>
        <Router />
      </StaticRouter>
    </Container>,
    {
      bootstrapScripts: ['client/bundle.js'],
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
