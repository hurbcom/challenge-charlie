import express, { Request, Response } from 'express';
import routes from './routes'
import cors from 'cors';
import config from './config/config';

// Basic server setup
const app = express();
const port = config.PORT;

// Allow GET requests from any origin, not just from the same server location
const corsOptions = {
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions))
app.use('/api', routes)

// Console message to view the environment and open port
app.listen(port, () => {
    console.log(`Running in ${config.NODE_ENV}: http://localhost:${port}`)
});
