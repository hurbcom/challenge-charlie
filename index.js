var express = require('express');
var cors = require('cors');
var fetch = require('node-fetch');

var app = express();
var bingAPI =
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

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

app.listen(3000, function() {
    console.log('listening on port 3000');
});
