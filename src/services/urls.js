import axios from 'axios';

export function setWeather(place){
    const weather = axios.get("http://api.openweathermap.org/data/2.5/forecast?q=" + place + "&APPID=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt&units=metric&cnt=3")
    return weather;
}

export function setLocation(lat, long){
    const URLlocation = axios.get("https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + long + "&key=c63386b4f77e46de817bdf94f552cddf")
    return URLlocation;
}

export const URLbackground = "https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
export const URLbackgroundBase = "https://www.bing.com";