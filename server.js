#!/usr/bin/env nodejs
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const port = 3000;

// Rewrite para o caminho até a src
const app = next({
  dev,
  dir: './src'
});
const handle = app.getRequestHandler();

// Inicializa o servidor
app.prepare().then(() => {
  const server = express();

  // Todas as requisições
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Define a porta do servidor
  server.listen(port, (err) => {
    if (err) throw err;
    console.log( `> Acesse: http://localhost:${port}` );
  });

});