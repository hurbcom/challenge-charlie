import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

const PORT = 8000;

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

const fetchBingImgData = async () => {
  const response = await fetch(
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US'
  );
  const data = await response.json();
  return data.images[0];
};

app.get('/bingImgAPI', async (req, res) => {
  const { url, startdate } = await fetchBingImgData();
  res.status(200).json({
    imgUrl: `https://www.bing.com${url}`,
    imgStartDate: startdate,
  });
});
