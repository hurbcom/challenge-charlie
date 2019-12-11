import axios from 'axios'

export default class ImageService {
    constructor() {
        this.app_id = 'c63386b4f77e46de817bdf94f552cddf'
    }

    async getLocation(lat, long) {
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${this.app_id}`)
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}