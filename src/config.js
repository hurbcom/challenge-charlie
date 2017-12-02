const weatherUrl = (location) => `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${location})") and u='c'&format=json`
const bingUrl = 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
const defaultBackground = 'https://www.bing.com/az/hprichbg/rb/LAUnionStation_PT-BR9199909903_1920x1080.jpg'

export default {weatherUrl, bingUrl, defaultBackground}