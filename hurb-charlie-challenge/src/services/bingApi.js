import axios from 'axios';

const cors = 'https://cors-anywhere.herokuapp.com/';
const bingApi = axios.create({
    baseURL: `${cors}https://www.bing.com`
});

export default bingApi;
