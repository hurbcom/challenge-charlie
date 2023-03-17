import useLocation from "@/hooks/use-location";
import { getWeather } from "@/services/weather";
import { createContext, useCallback, useState } from "react";
import { toast } from "react-toastify";

export const WeatherContext = createContext({
    city: null,
    setCity: null,
    forecast: new Array(3).fill(null),
    handleSearchForecast: null,
});

const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState("");
    const [forecast, setForecast] = useState(new Array(3).fill(null));
    const [loading, setLoading] = useState(false);
    const [unit, setUnit] = useState("metric");

    const { handleGetCityCoordinates } = useLocation();

    const handleToggleUnit = useCallback(() => {
        if (unit === "metric") {
            setUnit("imperial");
        } else {
            setUnit("metric");
        }
    }, [unit]);

    const clearForecast = useCallback(() => {
        setForecast(new Array(3).fill(null));
    }, []);

    const handleSearchForecast = async (latitude, longitude) => {
        if (latitude && longitude) {
            const weather = await getWeather(latitude, longitude);
            setForecast(weather);
        }
    };

    const handleGetWeather = async (locationName) => {
        try {
            setLoading(true);
            const coords = await handleGetCityCoordinates(locationName);
            if (coords) {
                setCity(coords.locationName);
                await handleSearchForecast(coords.lat, coords.lon);
            }
        } catch (error) {
            let message =
                "Erro ao buscar dados da localidade. Tente novamente.";
            if (error?.message) {
                message = error.message;
            }
            toast.error(message);
            clearForecast();
        } finally {
            setLoading(false);
        }
    };

    return (
        <WeatherContext.Provider
            value={{
                city,
                setCity,
                forecast,
                clearForecast,
                loading,
                setLoading,
                unit,
                handleToggleUnit,
                handleGetWeather,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
