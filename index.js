var express = require('express');
var cors = require('cors');
var fetch = require('node-fetch');

var app = express();
var bingAPI =
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
var yahooAPI = 'https://query.yahooapis.com/v1/public/yql';

app.use(cors());

/**
 * Fetch image of the day from Bing API.
 * @returns {object} A object with image url.
 * @example
 * {image: https://www.bing.com/image_url.jpg}
 */
app.get('/api/background', function(req, res) {
    fetch(bingAPI)
        .then(res => res.json())
        .then(body =>
            res.json({
                image:
                    'https://www.bing.com/' + body.images[0]['url'],
            })
        );
});

/**
 * Get the weather forecast from Yahoo! Weather API,
 * passing city's name by querystring.
 * @param {string} location
 * @example /api/weather?location=Fortaleza
 * @returns {object} A object with the API response
 */
app.get('/api/wheater', function(req, res) {
    var query = req.query;
    fetch(
        yahooAPI +
            '?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' +
            query.location +
            '") and u="' +
            query.unit +
            '"'
    )
        .then(res => res.json())
        .then(body => res.json(body.query));
});

/**
 * Get the weather forecast from Yahoo! Weather API,
 * passing coordinates by querystring.
 * @param {string} lat
 * @param {string} long
 * @example /api/coordinates?lat=-22.7741062&long=-43.3031759
 * @returns {object} A object with the API response
 */
app.get('/api/coordinates', function(req, res) {
    var query = req.query;
    fetch(
        yahooAPI +
            '?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(' +
            query.lat +
            ',' +
            query.long +
            ')")&format=json'
    )
        .then(res => res.json())
        .then(body => res.json(body.query));
});

app.listen(3000, function() {
    console.log('listening on port 3000');
});
