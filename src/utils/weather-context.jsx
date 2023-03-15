import { getWeather } from "@/services/weather";
import { createContext, useCallback, useState } from "react";

const emptyForecast = new Array(3).fill(null);

export const WeatherContext = createContext({
    city: null,
    setCity: null,
    forecast: emptyForecast,
    handleSearchForecast: null,
});

const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState("");
    const [forecast, setForecast] = useState(emptyForecast);
    const [loading, setLoading] = useState(false);
    const [unit, setUnit] = useState("metric");

    const handleToggleUnit = useCallback(() => {
        if (unit === "metric") {
            setUnit("imperial");
        } else {
            setUnit("metric");
        }
    }, [unit]);

    const handleSearchForecast = async (latitude, longitude) => {
        try {
            if (forecast[0]) {
                setForecast(emptyForecast);
            }
            if (latitude && longitude) {
                const weather = await getWeather(latitude, longitude);
                setForecast(weather);
            }
        } catch (error) {
            // console.log("error:", error);
            setForecast(new Array(3).fill(null));
        }
    };

    return (
        <WeatherContext.Provider
            value={{
                city,
                setCity,
                forecast,
                handleSearchForecast,
                loading,
                setLoading,
                unit,
                handleToggleUnit,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
