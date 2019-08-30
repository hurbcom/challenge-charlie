const key = '1a8f0d0379b466c874e344f683a4bf12'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/'
// Fetch today weather information
const TODAY_RAW_API_URL = `${BASE_URL}weather?q=__CITY__&units=metric&lang=pt&APPID=${key}`
// Fetch ahead weather information
const AHEAD_RAW_API_URL = `${BASE_URL}forecast?q=__CITY__&units=metric&cnt=25&lang=pt&APPID=${key}`

export async function getWeatherInformation (city) {
  const TODAY_API_URL = TODAY_RAW_API_URL.replace('__CITY__', city)
  const AHEAD_API_URL = AHEAD_RAW_API_URL.replace('__CITY__', city)

  const todayRequest = fetch(TODAY_API_URL)
  const aheadRequest = fetch(AHEAD_API_URL)

  const [todayRawResponse, aheadRawResponse] = await Promise.all([todayRequest, aheadRequest])

  const todayResponse = await todayRawResponse.json()
  const aheadResponse = await aheadRawResponse.json()

  aheadResponse.list.unshift(todayResponse)

  return aheadResponse
}
