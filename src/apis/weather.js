import config from "../config.json";
import axios from "axios";
export async function getWeather(location) {
    try {
        const res = await axios({
            baseURL: `${config.apis.weather}`,
            method: "GET",
            params: {
                q: `${location.municipality},
                     ${location.country_code}`,
                units: "metric",
                APPID: process.env.REACT_APP_WEATHER_API_KEY,
                lang: "pt_br",
                cnt: "3",
            },
        });
        const { main, weather, wind } = res.data;
        return { main, weather, wind };
    } catch (e) {
        console.log(e);
        return Promise.reject();
    }
}
