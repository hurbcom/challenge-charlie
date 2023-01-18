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
  contents: string
}
export const getBingBackgroung = async () => {
  try {
    const url = `http://api.allorigins.win/get?url=${encodeURIComponent(String(process.env.REACT_APP_BASE_BING_API))}`
    const response = await axios.get<ResponseAPI>(url)
    const transformJson = JSON.parse(response.data.contents)
    return transformJson.images[0].url
  } catch (err) {
    console.log(err)
    return []
  }
}

