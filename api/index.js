require('dotenv').config();
var express = require('express');
var cors = require('cors');
var axios = require('axios');
var app = express();
app.use(cors());

var { BING_BASE_URL, BING_WALLPAPER_API_URL, API_PORT } = process.env;

app.get('/background', function (req, res) {
  var url = BING_BASE_URL + BING_WALLPAPER_API_URL;
  axios
    .get(url)
    .then(function (response) {
      var backgroundImageUrl = BING_BASE_URL + response.data.images[0].url;
      return res.json({ url: backgroundImageUrl });
    })
    .catch(function (err) {
      return res.send({
        status: '500',
        message: error,
      });
    });
});

app.listen(API_PORT, function () {
  console.log('Server is running on localhost:' + API_PORT);
});
