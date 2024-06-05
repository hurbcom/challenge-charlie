const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.use(express.json());

router.post('/', async (req, res) => {
  const { latitude, longitude } = req.body;
  if (!latitude || !longitude) {
    return res.status(400).send({ error: 'Latitude and longitude are required' });
  }

  const apiKey = process.env.OPEN_CAGE_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;

  try {
    const apiResponse = await axios.get(url);
    const parsedData = apiResponse.data;

    if (parsedData.results && parsedData.results.length > 0) {
      res.json({
        results: parsedData.results
      });
    } else {
      throw new Error('No location found');
    }
  } catch (error) {
    res.status(500).send({ error: 'Error fetching or parsing the location' });
  }
});

module.exports = router;