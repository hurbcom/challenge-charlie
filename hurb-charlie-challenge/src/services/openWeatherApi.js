import axios from 'axios';

const openWeatherApi = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast`
});

export default openWeatherApi;
