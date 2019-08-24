var express = require('express');
var router = express.Router();

const https = require('https');

router.get('/', function(req, res, next) {

  getBackgroundImage(
    (image) => { renderMe(res, 'https://www.bing.com/'+image) },
    () => { renderMe(res, '/images/default-wallpaper.jpg') } 
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

function getBackgroundImage(success, error) {
  https.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      data = JSON.parse(data);
      success(data.images[0].url);
    });
  }).on('error', () => {
    error();
  });
}

module.exports = router;
