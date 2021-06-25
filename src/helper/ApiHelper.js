import axios from 'axios'

export default {
  get (url, params) {
    return axios.get(url, {
      params
    })
  }
}
