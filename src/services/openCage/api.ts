import axios from 'axios'

export const ApiKey = 'c63386b4f77e46de817bdf94f552cddf'

export const Instance = axios.create({
  baseURL: 'https://api.opencagedata.com/geocode/v1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
