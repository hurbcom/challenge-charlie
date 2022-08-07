import { useEffect, useState } from "react";
import Background from "./components/Background";
import Weather from "./components/Weather";
import { ILocation } from "./models/locationData";
import { IWeather } from "./models/weatherData";
import { GeolocationService } from "./services/GeolocationService";

import { GlobalStyle } from "./styles/global";

function App() {
    const [weatherData, setWeatherData] = useState<IWeather>();
    const [locationData, setLocationData] = useState<ILocation>();

    const getAddressAndWeather = async () => {
        try {
            const userLocationResponse =
                await GeolocationService.getUserLocation();
            const currentWeatherResponse =
                await GeolocationService.getWeatherFromLatAndLng(
                    userLocationResponse.results[0].geometry.lat,
                    userLocationResponse.results[0].geometry.lng
                );
            setWeatherData(currentWeatherResponse);
            const forecastResponse =
                await GeolocationService.getForecastFromLatAndLng(
                    userLocationResponse.results[0].geometry.lat,
                    userLocationResponse.results[0].geometry.lng
                );
            console.log("forecastResponse", forecastResponse);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAddressAndWeather();
    }, []);

    return (
        <>
            <GlobalStyle />
            {!weatherData ? (
                <div>Loading...</div>
            ) : (
                <Background>
                    <Weather weatherData={weatherData} />
                    {/* <h1>{address}</h1>
                    <h2>{JSON.stringify(weather)}</h2>
                    {weather && <h3>{tempConvertToCelsius(weather.temp)}ºC</h3>} */}
                </Background>
            )}
        </>
    );
}

export default App;
