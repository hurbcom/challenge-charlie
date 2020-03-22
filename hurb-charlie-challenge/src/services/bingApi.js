import axios from 'axios';

const bingApi = axios.create({
    baseURL: `http://www.bing.com/HPImageArchive.aspx?format=xml&idx=0&n=1`
});

export default bingApi;
