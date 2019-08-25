var express = require('express');
var router = express.Router();

const https = require('https');

router.get('/:lat/:lon', function(req, res, next) {
  let lat = req.params.lat;
  let lon = req.params.lon;

  getGeolocation(
    lat,
    lon,
    (resp) => { res.send(resp) },
    (err) => { console.log('no good -> ', err) },
  );

});

function renderMe(res, bgImage) {
  res.render(
    'index',
    {
      title: 'Challange Charlie',
      bgImage: bgImage
    }
  );
}

function getGeolocation(lat, lon, success, error) {
  let options = {
    method: 'GET',
    hostname: `nominatim.openstreetmap.org`,
    path: `/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`,
    headers: {
      'Referer': 'http://localhost/',
    }
  };

  https.request(options, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      //data = JSON.parse(data);
      success(data);
    });
  }).on('error', error);
}

module.exports = router;
