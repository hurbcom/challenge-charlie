/**
 * Server module based on express.
 */

import express from 'express';
import React from 'react';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';

import Container from '@/pages/_document';
import Router from '@/pages/_router';
import ApiRoutes from '@/api/routes';

dotenv.config({ path: './.env' });
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// For client side rendering
app.use(express.static('./dist'));
app.use(express.static('./dist/client'));

//including internal API routes
app.use('/api', ApiRoutes);

const port = process.env.PORT || 3000;

app.use(['/', '/about'], (req, res) => {
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
