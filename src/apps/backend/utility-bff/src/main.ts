import * as express from 'express';
import * as cors from 'cors';
import { GetBackgroundImageURLRequestHandler } from '@challenge-charlie/backend/utility/framework/handlers';

const app = express();

app.use(express.json());
app.use(cors());

app.get(
  GetBackgroundImageURLRequestHandler.URI,
  GetBackgroundImageURLRequestHandler.execute
);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
