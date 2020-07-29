import axios from 'axios';

const bingAPI = axios.create({
    baseURL: 'http://localhttps://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BRhost:3333',
});

export default bingAPI;
