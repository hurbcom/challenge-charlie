const express = require('express');
const YahooWeatherClass = require('../services/yahoo-weather');

const router = express.Router();
const YahooWeather = new YahooWeatherClass();

router.get('/', async (req, res) => {
  try {
    const response = await YahooWeather.getWeather(req.query);
    res.send(response);
  }
  catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;