import { useEffect, useState } from "react";
import { getCoordenatesByName } from "../apis/locationName";
import { getWeatherByCoordenates } from "../apis/weather";
import { AppContext } from "./weatherLocation.context";

export const AppProvider = ({ children }) => {
    const [status, setStatus] = useState("loading");
    const [location, setLocation] = useState("");
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState("");

    const setSuccessData = (coords, location, forecast) => {
        localStorage.setItem("coords", JSON.stringify(coords));
        setForecast(forecast);
        setStatus("success");
        setLocation(location);
        setError("");
    };

    const getForecastByCoords = async (coords, location) => {
        try {
            const weatherResponse = await getWeatherByCoordenates(
                coords.latitude,
                coords.longitude
            );

            setSuccessData(
                coords,
                location ?? { city: weatherResponse.city },
                weatherResponse.forecast
            );
        } catch {
            setStatus("error");
            setError("Ops! erro ao obter previsōes para " + location);
        }
    };
    const changeLocation = async (location) => {
        setStatus("loading");
        setLocation({ city: location });
        try {
            const response = await getCoordenatesByName(location);

            await getForecastByCoords(response.coords, response.location);
        } catch {
            setStatus("error");
            setError(
                "Ops! erro ao obter previsōes para " +
                    location +
                    " verifique a digitação"
            );
        }
    };

    useEffect(() => {
        setStatus("loading");
        const savedCoords = JSON.parse(localStorage.getItem("coords"));
        if (!savedCoords) {
            navigator?.geolocation.getCurrentPosition(
                async (geolocation) =>
                    getForecastByCoords({
                        latitude: geolocation.coords.latitude,
                        longitude: geolocation.coords.longitude,
                    }),
                () => {
                    setStatus("error");
                    setError(
                        "Ops! Permita acesso a localização ou informe sua cidade no campo acima"
                    );
                }
            );
        } else {
            getForecastByCoords(savedCoords);
        }
        // eslint-disable-next-line
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
