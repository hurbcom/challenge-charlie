import axios from 'axios'

const getLocationName = (latitude: number, longitude: number) => {
  const apiOpenCage = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
  const resultLocationName = axios
    .get(apiOpenCage)
    .then((res) => {
      return res.data?.results[0]?.components?.city
    })
    .catch(() => {
      console.debug('[Error getLocationName function]')
    })
  return resultLocationName
}

export default getLocationName
