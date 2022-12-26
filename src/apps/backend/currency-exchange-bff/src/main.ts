/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';
import {
  GetCurrenciesRequestHandler,
  PostQuotationRequestHandler,
} from '@challenge-charlie/backend/currency-exchange/framework/handlers';

const app = express();

app.use(express.json());
app.use(cors());

app.post(PostQuotationRequestHandler.URI, PostQuotationRequestHandler.execute);

app.get(GetCurrenciesRequestHandler.URI, GetCurrenciesRequestHandler.execute);

const port = process.env.port || 3332;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
