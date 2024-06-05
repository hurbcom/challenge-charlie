const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/image', async (req, res) => {
  const url = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

  try {
    const apiResponse = await axios.get(url);
    const parsedData = apiResponse.data;

    if (parsedData.images && parsedData.images[0]) {
      const imageUrl = `https://www.bing.com${parsedData.images[0].url}`;
      const copyright = parsedData.images[0].copyright;
      res.json({
        url: imageUrl,
        copyright: copyright
      });
    } else {
      throw new Error('No image found');
    }
  } catch (error) {
    res.status(500).send({ error: 'Error fetching or parsing the image' });
  }
});

module.exports = router;