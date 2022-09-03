import axios from "axios";
import { LatLongType } from "../providers/location";
import { Weather, WeatherAPIResponse } from "./getWeatherFromAPI.type";

export const getWeatherFromAPI = async ({
    latitude,
    longitude,
}: LatLongType): Promise<Weather> => {
    try {
        const baseUrl = "https://api.openweathermap.org/data/2.5/onecall";
        const { data } = await axios.get(baseUrl, {
            params: {
                units: "metric",
                lang: "pt_br",
                lat: latitude,
                lon: longitude,
                exclude: "minutely,hourly",
                appid: process.env.REACT_APP_OPENWEATHER_KEY,
            },
        });
        const weather = formatWeather(data);
        return weather;
    } catch (error) {
        throw new Error("Não foi possível consultar a API");
    }
};

function getBgColorBasedOnTemp(temp: number): string {
    let tempClass = "medium";
    if (temp <= 15) tempClass = "cold";
    if (temp > 35) tempClass = "hot";
    return tempClass;
}

function formatWeather(data: WeatherAPIResponse): Weather {
    const directions = ["N", "NE", "L", "SE", "S", "SO", "O", "NO", "N"];


    const todayData = data.current;
    const [tomorrowData, afterTomorrowData] = data.daily;
    return {
        today: {
            iconId: todayData.weather[0].icon,
            bgColor: getBgColorBasedOnTemp(todayData.temp),
            temp: todayData.temp.toFixed(0),
            humidity: todayData.humidity.toString(),
            pressure: todayData.pressure.toString(),
            description: todayData.weather[0].description,
            wind: {
                direction: directions[Math.floor(todayData.wind_deg / 45)],
                speed: (todayData.wind_speed * 3.6).toFixed(1),
            },
        },
        tomorrow: {
            temp: tomorrowData.temp.day.toFixed(0),
            bgColor: getBgColorBasedOnTemp(tomorrowData.temp.day),
        },
        afterTomorrow: {
            temp: afterTomorrowData.temp.day.toFixed(0),
            bgColor: getBgColorBasedOnTemp(afterTomorrowData.temp.day),
        },
    };
}
