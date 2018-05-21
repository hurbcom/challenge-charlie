export async function get(location) {
    const axios = require('axios');
    const CORS_PROXY = 'https://cors.io/?';
    let YAHOO_WEATHER = '';
    if (location.hasOwnProperty('name')) {
        YAHOO_WEATHER = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location.name}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
    } else {
        YAHOO_WEATHER = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${location.lat},${location.lon})")&format=json`;
    }
    try {
        const params = await axios.get(CORS_PROXY + YAHOO_WEATHER);
        return params.data;
    } catch (err) {
        throw err;
    }
}
