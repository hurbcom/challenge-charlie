var express = require('express');
var router = express.Router();

const https = require('https');


router.get('/', function(req, res, next) {
  
  https.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      data = JSON.parse(data);
      console.log(data);
      res.render(
        'index',
        {
          title: 'Challange Charlie',
          bgImage: 'https://www.bing.com/'+data.images[0].url
        }
      );
    });
  }).on("error", (err) => {
    res.render(
      'index',
      {
        title: 'Challange Charlie',
        bgImage: '/images/default-wallpaper.jpg'
      }
    );
  });

});


module.exports = router;
