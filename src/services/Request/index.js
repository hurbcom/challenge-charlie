import axios from 'axios'

export const request = axios.create({
  timeout: 3000,
})
