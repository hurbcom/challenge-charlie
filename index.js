const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/bingImg', (req, res) => {
  fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
    .then(resp => resp.json())
    .then(resp => {
      const { images } = resp;
      const image = `https://www.bing.com/${images[0].url}`;
      res.status(200).send({ image });
    })
    .catch(err => res.status(404).send());
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server running on port: ', PORT);
});
