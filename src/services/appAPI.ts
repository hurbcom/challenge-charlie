import axios from 'axios';

const appAPI = axios.create({
    baseURL: 'http://localhost:3333',
});

export default appAPI;
