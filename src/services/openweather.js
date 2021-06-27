import axios from 'axios';

const openweather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});

export default openweather;