import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

const PORT = 8000

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))

app.get('/bingImgAPI', (req, response) => {
  const handleBingImgData = async () => {
    const resp = await fetch(
      'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US'
    )

    const respJson = await resp.json()
    const { url, startdate } = respJson.images[0]
    return response.status(200).json({
      imgUrl: `https://www.bing.com${url}`,
      imgStartDate: startdate,
    })
  }
  handleBingImgData()
})
