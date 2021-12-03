require('dotenv').config()
var express = require('express');
var cors = require('cors');
var axios = require('axios');
var app = express();
app.use(cors());

app.get('/background', function (req, res) {
  var url = process.env.BING_BASE_URL + process.env.BING_WALLPAPER_API_URL;
  axios.get(url).then(
    function (response) {
      return res.send(
        process.env.BING_BASE_URL + response.data.images[0].url
      );
    }).catch(function (err) {
      return res.send({
        status: '500',
        message: error
      });
    }
  );
});

app.listen(process.env.API_PORT, function() {
  console.log("Server is running on localhost:" + process.env.API_PORT);
});