import axios from "axios";
import config from "../config/config";

const instance = axios.create({
    baseURL: config.APP_API,
    headers: {
        "Content-Type": "application/json"
    }
})

// Accesses the background image route and returns its link.
export default {
    getBackgroundImage: () => new Promise((resolve, reject) => {
        instance.get('/background')
            .then(response => {
                if (response.status !== 200) {
                    reject(new Error('Unable to get image from server'))
                }
                resolve(response.data)
            })
            .catch(error => {
                console.error('getBackgroundImage error ', error)
                reject(error)
            })
    })
}