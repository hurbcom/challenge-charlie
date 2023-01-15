import axios from "axios"

export const getCurrentWeather = async (latitude: number, longitude: number) => {
  try {
    const url = String(process.env.REACT_APP_BASE_WEATHER_API)
    const response = await axios.get(`${url}/weather/?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=pt_br&units=metric`)

    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}

export const getForecastForNextDays = async (latitude: number, longitude: number) => {
  try {
    const url = String(process.env.REACT_APP_BASE_LOCATION_API)
    const response = await axios.get(`${url}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=pt_br&units=metric`)

    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}