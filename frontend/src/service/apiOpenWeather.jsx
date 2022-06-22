import axios from 'axios'; 

const apiOpenWeather = axios.create({
    baseURL: ''
})

export default apiOpenWeather; 
