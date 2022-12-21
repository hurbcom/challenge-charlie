import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/background', async (req, res) => {
    const response = await fetch(
        'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US'
    );

    const json = await response.json()

    res.status(200).send({
        data: `https://www.bing.com${json.images[0].url}`
    })
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
