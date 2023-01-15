import axios from "axios"

export const getLocationByCoordinates = async (latitude: number, longitude: number) => {
  try {
    const url = String(process.env.REACT_APP_BASE_LOCATION_API)
    const response = await axios.get(`${url}/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_LOCATION_KEY}`)

    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}

export const getLocationByLocalName = async (local: string) => {
  try {
    const url = String(process.env.REACT_APP_BASE_LOCATION_API)
    const response = await axios.get(`${url}/geocode/v1/json?q=${local}&key=${process.env.REACT_APP_LOCATION_KEY}`)

    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}