const express = require('express')
const cors = require('cors')
const request = require('request')

const app = express()

app.use(cors())

app.get('/bing-image-url',(req,res)=>{
    request(
        { url: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR' },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
          }
    
          res.json(JSON.parse(body));
        }
      )
})