import axios from 'axios';

const openGateApi = axios.create({
    baseURL: `https://api.opencagedata.com/geocode/v1/`
});

export default openGateApi;
