const express = require('express');
const YahooWeatherClass = require('../services/yahoo-weather');
const YahooWeather = new YahooWeatherClass();

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const response = await YahooWeather.getWeather();
    res.send(response);
  }
  catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;