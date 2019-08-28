const key = '9835a91bca014aee882640aa75c51939'
const RAW_API_URL = `https://api.opencagedata.com/geocode/v1/json?q=__POSITION__&key=${key}&language=en`

const ALTERNATIVE_RAW_API_URL = `http://ip-api.com/json/`

export async function getUserLocation (position) {
  const lat = position.coords.latitude
  const lng = position.coords.longitude

  const API_URL = RAW_API_URL.replace('__POSITION__', `${lat},${lng}`)
  const request = await fetch(API_URL)
  const response = await request.json()
  return {
    city: response.results[0].components.city,
    state: response.results[0].components.state,
  }
}

export async function alternativeGetUserLocation () {
  const request = await fetch(ALTERNATIVE_RAW_API_URL)
  const response = await request.json()
  return {
    city: response.city,
    state: response.regionName,
  }
}
