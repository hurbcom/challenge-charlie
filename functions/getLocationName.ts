import axios from 'axios'

const getLocationName = (latitude: number, longitude: number) => {
  const apiOpenCage = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=1b9a137b98eb48bcadfb0d2de8e27864&language=en`
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
