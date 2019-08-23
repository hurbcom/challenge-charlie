var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Challange Charlie' });

  getLocation(
    (location) => {
      getWeatherInfo(location);
    },
    (err) => {
      console.log('error - ', err);
    }
  );


});

function getLocation(success, error) {
  success({city: 'sunnyvale', region: 'ca'});
}

function getWeatherInfo({city, region}) {
  let OAuth = require('oauth');
  let request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9djl1TlV0Ymx3dGVtJmQ9WVdrOWJXVm1NWE5STm5NbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTdi',
    '9134182aff0e14e9435615351c80b179b4a9ed1b',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    {
      "X-Yahoo-App-Id": "mef1sQ6s"
    }
  );
  request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city},${region}&format=json`,
    null,
    null,
    function (err, data, result) {
      if (err) console.log(err);
      console.log(data);
    }
  );
}

module.exports = router;
