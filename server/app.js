import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import timeout from 'connect-timeout';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(timeout('5s'));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
