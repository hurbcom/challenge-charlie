'use strict';
import https from 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';


let subscriptionKey = 'eb45744e7d0a1196495e4fc5873f9efd';
let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search';
let term = 'tropical ocean';

let request_params = {
    method : 'GET',
    hostname : host,
    path : path + '?q=' + encodeURIComponent(search),
    headers : {
    'Ocp-Apim-Subscription-Key' : subscriptionKey,
    }
};

let req = https.request(request_params, response_handler);
req.end();









export default https;