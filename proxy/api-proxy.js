const express = require('express')
const cors = require('cors')
const request = require('request')

const BING_URL = 'https://www.bing.com'

const app = express()

app.use(cors())

app.get('/bing-image-url',(req,res)=>{
    request(
        { url: `${BING_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR` },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
          }

          const data = JSON.parse(body)
          const url = data.images[0].url
    
          res.json(`${BING_URL}/${url}`);
        }
      )
})

app.get('/user-location',(req,res)=>{
    const {lat, lon} = req.query;
    request(
        { url: `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C%20${lon}&key=c63386b4f77e46de817bdf94f552cddf&language=pt&pretty=1` },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
          }

          res.json(JSON.parse(body));
        }
      )
})

app.get('/weather-forecast',(req,res)=>{
    const {cityName} = req.query;
    request(
        { url: `http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityName)}&appid=7ba73e0eb8efe773ed08bfd0627f07b8&units=metric` },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: error });
          }

          res.json(JSON.parse(body));
        }
      )
})

app.listen(3005, () => {
    console.log('Proxy is running on port 3005')
})