import axios from 'axios'

export default class ImageService {

    async getImage() {
        try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`)
            return Promise.resolve(`https://www.bing.com${response.data.images[0].url}`)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}