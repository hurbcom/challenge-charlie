import axios from 'axios'

export const ApiKey = '772920597e4ec8f00de8d376dfb3f094'

export const Instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast'
})
