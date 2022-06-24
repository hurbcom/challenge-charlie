import axios from 'axios'; 

    const apiOpenWeather = axios.create({
        baseURL: `${process.env.REACT_APP_API_WEATHER}`
    })
    
export default apiOpenWeather; 
