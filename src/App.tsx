import { useEffect, useState } from "react";
import Background from "./components/Background";
import Weather from "./components/Weather";
import { IForecastData } from "./models/forecastData";
import { IWeather } from "./models/weatherData";
import { GeolocationService } from "./services/GeolocationService";

import { GlobalStyle } from "./styles/global";

function App() {
    const [weatherData, setWeatherData] = useState<IWeather>();
    const [forecast, setForecast] = useState<IForecastData>();
    const [userPermission, setUserPermission] = useState<boolean>();
    const [loading, setLoading] = useState<boolean>(true);

    const watchUserLocation = async () => {
        const permission = navigator.geolocation.watchPosition(
            () => {
                setUserPermission(true);
            },
            (error) => {
                setUserPermission(false);
                console.log(error);
            }
        );
        return permission;
    };

    useEffect(() => {
        watchUserLocation();
    }, []);

    const getAddressAndWeather = async () => {
        setLoading(true);
        try {
            const userLocationResponse =
                await GeolocationService.getUserLocation();
            if (userLocationResponse) {
                const currentWeatherResponse =
                    await GeolocationService.getWeatherFromLatAndLng(
                        userLocationResponse.results[0]?.geometry.lat,
                        userLocationResponse.results[0]?.geometry.lng
                    );
                setWeatherData(currentWeatherResponse);
                const forecastResponse =
                    await GeolocationService.getForecastFromLatAndLng(
                        userLocationResponse.results[0].geometry.lat,
                        userLocationResponse.results[0].geometry.lng
                    );
                setForecast(forecastResponse);
                setLoading(false);
            } else {
                setLoading(false);
                setForecast(undefined);
                setWeatherData(undefined);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        if (!userPermission) {
            setLoading(false);
            return;
        } else {
            getAddressAndWeather();
        }
    }, [userPermission]);

    return (
        <>
            <GlobalStyle />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Background>
                    <Weather weatherData={weatherData} forecast={forecast} />
                </Background>
            )}
        </>
    );
}

export default App;
