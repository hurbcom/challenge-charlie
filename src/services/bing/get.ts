import axios from 'axios'

export const GetJsonBingApi = async () =>
  await axios
    .get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
      )}`
    )
    .then(resp => JSON.parse(resp.data.contents))
