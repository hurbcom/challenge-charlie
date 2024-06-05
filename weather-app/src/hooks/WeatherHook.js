import { createContext, useState, useContext, useEffect, useMemo } from "react";
import {
    weatherRequests,
    weatherByCityRequests
} from "../services/https/weatherRequests";
import { useGeoLocation } from "./GeoLocationHook";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const initialWeatherState = {
        futureWeatherData: [],
        currentWeather: null,
        error: "",
        loading: false
    };

    const [weather, setWeather] = useState(initialWeatherState);
    const { coordinates } = useGeoLocation();
    const today = new Date();
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedTomorrow = dateFormatter.format(tomorrow);
    
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    const formattedDayAfterTomorrow = dateFormatter.format(dayAfterTomorrow);

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            const { weatherData, futureWeatherData } = await weatherRequests(latitude, longitude);
            const tomorrowWeather = futureWeatherData.find(
                (weather) =>
                    dateFormatter.format(new Date(weather.dateTime)) ===
                    formattedTomorrow
            );
            
            const dayAfterTomorrowWeather = futureWeatherData.find(
                (weather) =>
                    dateFormatter.format(new Date(weather.dateTime)) ===
                    formattedDayAfterTomorrow
            );

            return { weatherData, futureWeatherData: [tomorrowWeather,dayAfterTomorrowWeather].filter(Boolean) };
        } catch (error) {
            setWeather(prev => ({ ...prev, error: error }));
            return null;
        }
    };

    useEffect(() => {
        if (!coordinates.latitude || !coordinates.longitude) {
            setWeather(prev => ({ ...prev, error: "Empty coordinates" }));
            return;
        }

        const init = async () => {
            const { latitude, longitude } = coordinates;
            const weatherData = await fetchWeatherData(latitude, longitude);

            if (weatherData) {
                const { weatherData: currentWeather, futureWeatherData } = weatherData;
                setWeather(prev => ({
                    ...prev,
                    futureWeatherData,
                    currentWeather,
                    error: ""
                }));
            }
        };

        init();

    }, [coordinates.latitude, coordinates.longitude]);

    const setWeatherByCityName = async (cityName) => {
        try {
            const { weatherData, futureWeatherData } = await weatherByCityRequests(cityName);
            const tomorrowWeather = futureWeatherData.find(
                (weather) =>
                    dateFormatter.format(new Date(weather.dateTime)) ===
                    formattedTomorrow
            );
            
            const dayAfterTomorrowWeather = futureWeatherData.find(
                (weather) =>
                    dateFormatter.format(new Date(weather.dateTime)) ===
                    formattedDayAfterTomorrow
            );
            
            setWeather(prev => ({
                ...prev,
                futureWeatherData: [tomorrowWeather,dayAfterTomorrowWeather].filter(Boolean),
                currentWeather: weatherData || null,
                error: ""
            }));
        } catch (error) {
            setWeather(prev => ({ ...prev, error: error }));
        }
    };

    const providerValue = useMemo(() => ({
        ...weather,
        setWeatherByCityName
    }), [weather]);

    return (
        <WeatherContext.Provider value={providerValue}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error("useWeather must be used within a WeatherProvider");
    }
    return context;
};

export default WeatherContext;