/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const quotationCache = {};

app.post('/api/quotation', async (req, res) => {
  const { from, to } = req.body;
  console.log("🚀 ~ file: main.ts:21 ~ app.post ~ from, to", from, to)

  let quotation: string;

  if (quotationCache[from]) {
    console.log(`[GET] - api.coinbase.com - /api/currencies - returning from cache ${from} x ${to}`)
    quotation = quotationCache[from][to];
  } else {
    try {

      const response = await fetch(
        `https://api.coinbase.com/v2/exchange-rates?currency=${from}`
        );
        
        const { data } = await response.json();
        
        quotationCache[from] = data.rates;
        
        const value = quotationCache[from][to];
        
        quotation = value;
      } catch (err) {
        console.log("🚀 ~ file: main.ts:42 ~ app.post ~ err", err)
        res.status(500).send({
          code: 500,
          status: 'error interno no servidor',
          data: '',
        });
      }
  }

  res.send({
    code: 200,
    status: 'sucesso',
    data: Number.parseFloat(quotation).toFixed(2),
  });
});

let currenciesCache = [];

app.get('/api/currencies', async (ewq, res) => {

  if (currenciesCache.length > 0) {
    console.log(`[GET] - api.coinbase.com - /api/currencies - returning from cache`)

    res.send({
      code: 200,
      status: 'sucesso',
      data: currenciesCache,
    });
  } else {
    const response = await fetch('https://api.coinbase.com/v2/currencies');
    const { data } = await response.json();

    currenciesCache = data;

    res.send({
      code: 200,
      status: 'sucesso',
      data: data,
    });
  }
});

const port = process.env.port || 3332;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
