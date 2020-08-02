import axios from 'axios';

const weatherAPI = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`,
});

export default weatherAPI;