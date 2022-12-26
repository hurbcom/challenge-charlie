/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';

import {
  GetLocationDetailsByAddressRequestHandler,
  GetLocationDetailsByCoordinatesRequestHandler,
} from '@challenge-charlie/backend/weather-forecast/framework/handlers';
import { setupProcessEnv } from '@challenge-charlie/backend/environments';
import { environment } from './environments/environment';

if (!process.env.CONTAINERIZED) {
  setupProcessEnv(environment.weatherForecast);
}

const app = express();

app.use(express.json());
app.use(cors());

app.post(
  GetLocationDetailsByCoordinatesRequestHandler.URI,
  GetLocationDetailsByCoordinatesRequestHandler.execute
);

app.post(
  GetLocationDetailsByAddressRequestHandler.URI,
  GetLocationDetailsByAddressRequestHandler.execute
);

const port = process.env.port || 3331;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
