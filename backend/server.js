const express = require('express');
const request = require('request');
const app = express();
let cors = require('cors');

const PORT = 3003;
const HOST = '0.0.0.0'

app.use(cors());
const url ='https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

app.get('/image', function(req, res){
    request(url, function (error, response, body) {
        res.status(200).send(body)
    });
})



app.listen(PORT, HOST)