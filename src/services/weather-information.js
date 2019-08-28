const key = '1a8f0d0379b466c874e344f683a4bf12'
const RAW_API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=__CITY__&units=metric&cnt=25&lang=en&APPID=${key}`

export async function getWeatherInformation (city) {
  const API_URL = RAW_API_URL.replace('__CITY__', city)
  const request = await fetch(API_URL)
  const response = await request.json()
  return response
}
