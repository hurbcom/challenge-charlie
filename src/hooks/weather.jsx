import React, { createContext, useCallback, useState, useContext } from "react";
import axios from "axios";

// Instantiating the context
const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
    const [todayTemp, setTodayTemp] = useState();
    const [dayPlusOneTemp, setDayPlusOneTemp] = useState();
    const [dayPlusTwoTemp, setDayPlusTwoTemp] = useState();
    const [weather, setWeather] = useState();
    const [wind, setWind] = useState();
    const [direction, setDirection] = useState();
    const [humidity, setHumidity] = useState();
    const [pressure, setPressure] = useState();
    const [scale, setScale] = useState("C°");
    const [loading, setLoading] = useState(true);

    // Fahreinheit to Celsius
    const celsius = (temp) => {
        return (((temp - 32) * 5) / 9).toFixed(1);
    };

    // Celsius to Fahreinheit
    const fahrenheit = (temp) => {
        return ((9 / 5) * temp + 32).toFixed(1);
    };

    // Degree to Cardinal direction
    const windDirection = (deg) => {
        switch (deg) {
            case deg >= 335 || deg <= 23:
                return "N";
            case deg > 23 && deg < 68:
                return "NE";
            case deg >= 68 && deg <= 113:
                return "L";
            case deg > 113 && deg < 157:
                return "SE";
            case deg >= 157 && deg <= 203:
                return "S";
            case deg > 203 && deg < 247:
                return "SO";
            case deg >= 247 && deg <= 293:
                return "O";
            default:
                return "NO";
        }
    };

    const translateWeather = (weather) => {
        switch (weather) {
            case "Thunderstorm":
                return "Temporal";
            case "Drizzle":
                return "Chuvisco";
            case "Rain":
                return "Chuva";
            case "Snow":
                return "Neve";
            case "Clear":
                return "Ensolarado";
            case "Clouds":
                return "Nublado";
            default:
                return "Ventania";
        }
    };

    const getWeatherInfo = useCallback(async (lat, long) => {
        setLoading(true);
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely,hourly&appid=5ca0d94f4b64649ea9e9a402d511df8a`
        );
        const apiRes = response.data.daily;
        setScale("C°");
        setTodayTemp(apiRes[0].temp.day.toFixed(1));
        setDayPlusOneTemp(apiRes[1].temp.day.toFixed(1));
        setDayPlusTwoTemp(apiRes[2].temp.day.toFixed(1));
        setWeather(translateWeather(apiRes[0].weather[0].main));
        setWind((apiRes[0].wind_speed * 3.6).toFixed(1));
        setDirection(windDirection(apiRes[0].wind_deg));
        setHumidity(apiRes[0].humidity);
        setPressure(apiRes[0].pressure);

        setLoading(false);
    });

    const switchScale = useCallback(() => {
        switch (scale) {
            case "C°":
                setTodayTemp(fahrenheit(todayTemp));
                setDayPlusOneTemp(fahrenheit(dayPlusOneTemp));
                setDayPlusTwoTemp(fahrenheit(dayPlusTwoTemp));
                setScale("F°");
                break;
            case "F°":
                setTodayTemp(celsius(todayTemp));
                setDayPlusOneTemp(celsius(dayPlusOneTemp));
                setDayPlusTwoTemp(celsius(dayPlusTwoTemp));
                setScale("C°");
                break;
            default:
        }
    });

    return (
        <WeatherContext.Provider
            value={{
                getWeatherInfo,
                todayTemp,
                dayPlusOneTemp,
                dayPlusTwoTemp,
                weather,
                wind,
                direction,
                humidity,
                pressure,
                switchScale,
                scale,
                loading,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export function useWeather() {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeather is missing");
    }
    return context;
}
