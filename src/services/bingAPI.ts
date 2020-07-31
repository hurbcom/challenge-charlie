import axios from 'axios';

const bingAPI = axios.create({
    baseURL: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
});

export default bingAPI;
