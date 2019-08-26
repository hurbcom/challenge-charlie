var express = require('express');
var router = express.Router();

const Nominatim = require('nominatim-geocoder');
const geocoder = new Nominatim();

router.get('/:lat/:lon', function(req, res, next) {
  let lat = req.params.lat;
  let lon = req.params.lon;
  geocoder.reverse( { lat: lat, lon: lon } )
    .then((response) => {
      if (response.address) {
        res.send(response.address);
        return;
      }
      error(res, response);
    })
    .catch((err) => error(res, err));
});

router.get('/:city', function(req, res, next) {
  let city = req.params.city;
  geocoder.search( { city: city, zoom: 10, addressdetails: 1 } )
    .then((response) => {
      if (response.length > 0) {
        res.send(response[0]);
        return;
      }
      res.send([]);
    })
    .catch((err) => error(res, err));
});

function error(res, err) {
  console.log(err);
  res.send('Error when trying to retrieve geolocation information.');
}

//`https://nominatim.openstreetmap.org/search?format=json&city=${city}&zoom=10&addressdetails=1`,

module.exports = router;
