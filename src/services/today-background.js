// Using "https://cors-anywhere.herokuapp.com" to fool the CORS
const API_URL = 'https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
const BASE_URL = 'https://www.bing.com'

export async function getTodayBackground () {
  const request = await fetch(API_URL)
  const response = await request.json()
  return BASE_URL + response.images[0].url
}
