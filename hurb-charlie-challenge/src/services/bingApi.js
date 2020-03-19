import axios from 'axios';

const bingApi = axios.get(
    `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
);

export default bingApi;
