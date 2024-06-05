const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const bingRouter = require('./routes/bing');
const geolocationRouter = require('./routes/opencage');
const openWeatherRouter = require('./routes/openWeather');

app.use('/bing', bingRouter);
app.use('/geolocation', geolocationRouter);
app.use('/weather', openWeatherRouter)

app.listen(3005, () => {
  console.log('Server running on http://localhost:3005');
});
