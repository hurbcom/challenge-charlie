import { useEffect, useState } from "react";
import { getCoordenatesByName } from "../apis/locationName";
import { getWeatherByCoordenates } from "../apis/weather";
import { AppContext } from "./weatherLocation.context";

export const AppProvider = ({ children }) => {
    const [status, setStatus] = useState("loading");

    const [location, setLocation] = useState("");
    const [forecast, setForecast] = useState();
    const [error, setError] = useState("");

    const changeLocation = async (location) => {
        setStatus("loading");

        try {
            const { city, state, latitude, longitude } =
                await getCoordenatesByName(location);

            const weatherResponse = await getWeatherByCoordenates(
                latitude,
                longitude
            );

            setForecast(weatherResponse.forecast);
            setStatus("success");
            setLocation({ city, state });
            setError("");
        } catch {
            setStatus("error");
            setError("ops! erro ao obter previsōes para " + location);
        }
    };

    useEffect(() => {
        navigator?.geolocation.getCurrentPosition(
            async (geolocation) => {
                const weatherResponse = await getWeatherByCoordenates(
                    geolocation.coords.latitude,
                    geolocation.coords.longitude
                );

                setLocation({ city: weatherResponse?.city });
                if (weatherResponse?.forecast) {
                    setForecast(weatherResponse?.forecast);
                    setStatus("success");
                }

                setError("");
            },
            () => {
                setStatus("error");
                setError(
                    "ops! Permita acesso a localização ou informe sua cidade no campo acima"
                );
            }
        );
    }, []);
    return (
        <AppContext.Provider
            value={{
                location,
                forecast,
                status,
                error,
                changeLocation,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
