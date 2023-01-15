import axios from "axios"

interface ImagesProp {
  startdate: number
  fullstartdate: number
  enddate: number
  url: string
  urlbase: string
  copyright: string
  copyrightlink: string
  title: string
  quiz: string
  wp: boolean
  hsh: string
  drk: number
  top: number
  bot: number
  hs: []
}

interface ResponseAPI {
  images: ImagesProp[]
}
export const getBingBackgroung = async () => {
  console.log(process.env.REACT_APP_BASE_BING_API)
  try {
    const url = String(process.env.REACT_APP_BASE_BING_API)
    const response = await axios.get<ResponseAPI>(url, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })

    return response.data.images
  } catch (err) {
    console.log(err)
    return []
  }
}

