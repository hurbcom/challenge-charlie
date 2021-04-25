import axios from 'axios'

const getWeather = (location: string) => {
  const apiOpenWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=7ba73e0eb8efe773ed08bfd0627f07b8`
  return axios.get(apiOpenWeather).then((res) => {
    return [{ ...res.data.list[0] }, { ...res.data.list[8] }, { ...res.data.list[16] }]
  })
}

export default getWeather
