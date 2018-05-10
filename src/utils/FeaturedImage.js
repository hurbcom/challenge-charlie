export async function get() {
    const axios = require('axios');
    const BING_URL = 'https://www.bing.com';
    const BING_API = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
    try {
        const params = await axios.get(BING_API);
        return BING_URL + params.data.images[0].url;
    } catch (err) {
        throw err;
    }
}
