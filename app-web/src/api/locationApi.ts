import axios from "axios";
import config from "../config/config";

const instance = axios.create({
    baseURL: config.APP_API,
    headers: {
        "Content-Type": "application/json"
    }
})

// Accesses the location route, returning the user's city based on their latitude and longitude.
export default {
    getLocation: (latitude: string, longitude: string) => new Promise((resolve, reject) => {
        instance.get('/location?latitude=' + latitude + '&longitude=' + longitude)
            .then(response => {
                if (response.status !== 200) {
                    reject(new Error('Unable to get location from server'))
                }
                resolve(response.data)
            })
            .catch(error => {
                console.error('getLocation error ', error)
                reject(error)
            })
    })
}