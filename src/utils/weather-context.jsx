import { getWeather } from "@/services/weather";
import { createContext, useState } from "react";

export const WeatherContext = createContext({
    city: null,
    setCity: null,
    forecast: new Array(3).fill(null),
    handleSearchForecast: null,
});

const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState("");
    const [forecast, setForecast] = useState(new Array(3).fill(null));

    const handleSearchForecast = async (latitude, longitude) => {
        try {
            if (latitude && longitude) {
                const weather = await getWeather(latitude, longitude);
                setForecast(weather);
            }
        } catch (error) {
            console.log("error:", error);
        }
    };

    return (
        <WeatherContext.Provider
            value={{
                city,
                setCity,
                forecast,
                handleSearchForecast,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
