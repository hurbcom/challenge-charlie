import React, { ReactNode, useState } from "react";
import { getLatLongFromAPI } from "../services/getLatLongFromAPI";
import { getWeatherFromAPI } from "../services/getWeatherFromAPI";
import { Weather } from "../services/getWeatherFromAPI.type";

type WeatherContextType = {
    getWeather: Function,
    weather: Weather | null
};

const WeatherContext = React.createContext<WeatherContextType>(
    {} as WeatherContextType
);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
    const [weather, setWeather] = useState<Weather | null>(null);

    async function getWeather(address: string) {
        const coords = await getLatLongFromAPI(address);
        const weather = await getWeatherFromAPI(coords);
        setWeather(weather);
    }

    return (
        <WeatherContext.Provider value={{ getWeather, weather }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => React.useContext(WeatherContext);
