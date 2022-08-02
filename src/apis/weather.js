import config from "../config.json";
import axios from "axios";

export async function getWeatherByCoordenates(latitude, longitude) {
    try {
        const res = await axios({
            baseURL: config.apis.weather,
            method: "GET",
            url: "/forecast",
            params: {
                lat: latitude,
                lon: longitude,
                units: "metric",
                APPID: process.env.REACT_APP_WEATHER_API_KEY,
                lang: "pt_br",
                cnt: "3",
            },
        });
        const { city, list } = await res.data;
        return { city: city.name, forecast: list };
    } catch (e) {
        console.log(e);
        return Promise.reject();
    }
}
