var express = require('express');
var cors = require('cors');
var fetch = require('node-fetch');

var app = express();
var bingAPI =
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
var yahooAPI = 'https://query.yahooapis.com/v1/public/yql';

app.use(cors());

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

app.get('/api/wheater', function(req, res) {
    var query = req.query;
    fetch(
        yahooAPI +
            '?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' +
            query.location +
            '")'
    )
        .then(res => res.json())
        .then(body => res.json(body.query));
});

app.listen(3000, function() {
    console.log('listening on port 3000');
});
