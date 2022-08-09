import { useEffect, useState } from "react";
import Background from "./components/Background";
import Loader from "./components/Loader";
import Weather from "./components/Weather";
import { IForecastData } from "./models/forecastData";
import { IWeather } from "./models/weatherData";
import { GeolocationService } from "./services/GeolocationService";

import { GlobalStyle } from "./styles/global";

function App() {
    const [weatherData, setWeatherData] = useState<IWeather>();
    const [forecast, setForecast] = useState<IForecastData>();
    const [loading, setLoading] = useState<boolean>(true);

    // Function to watch if user gave permission to access their location from browser
    const watchUserLocation = async () => {
        setLoading(true);
        const permission = navigator.geolocation.watchPosition(
            () => {},
            (error) => {
                console.log(error);
                if (error.code === 1) {
                    alert(
                        "Por favor, autorize a localização melhor experiência com o app. Mas não se preocupe, você pode continuar usando o app sem a sua localização atual."
                    );
                    setLoading(false);
                }
            }
        );
        return permission;
    };

    // Function to get user's location if he gave permission and return city name and forecast
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
        watchUserLocation();
        getAddressAndWeather();
    }, []);

    return (
        <>
            <GlobalStyle />
            {loading ? (
                <Loader />
            ) : (
                <Background>
                    <Weather weatherData={weatherData} forecast={forecast} />
                </Background>
            )}
        </>
    );
}

export default App;
