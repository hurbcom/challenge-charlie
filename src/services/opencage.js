import axios from 'axios';

const opencage = axios.create({
    baseURL: 'https://api.opencagedata.com/geocode/v1/',
});

export default opencage;