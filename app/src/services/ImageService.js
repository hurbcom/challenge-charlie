import axios from 'axios'

export default class ImageService {

    async getImage() {
        try {
            const response = await axios.get(`https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`)
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}