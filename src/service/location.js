import axios from "axios"

const API_KEY = "c63386b4f77e46de817bdf94f552cddf"
const locationAPI = axios.create({baseURL: "https://api.opencagedata.com"})

async function getByCoords({latitude, longitude}) {
    const response = await locationAPI.get(`/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`)
    return response.data
}

async function getByPlace(place) {
    const response = await locationAPI.get(`/geocode/v1/json?q=${place}&key=${API_KEY}`)
    return response.data
}

export default {getByCoords, getByPlace}