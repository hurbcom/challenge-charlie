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

app.listen(3005, () => {
    console.log('Proxy is running on port 3005')
})