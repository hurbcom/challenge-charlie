import { useEffect, useState } from "react";
import Background from "./components/Background";
import Weather from "./components/Weather";
import { IWeather } from "./models/weatherData";
import { GeolocationService } from "./services/GeolocationService";

import { GlobalStyle } from "./styles/global";

function App() {
    const [address, setAddress] = useState([]);
    const [weatherData, setWeatherData] = useState<IWeather>();

    const getAddressAndWeather = async () => {
        await GeolocationService.getUserLocation()
            .then(async (response) => {
                setAddress(response.results[0].formatted);
                await GeolocationService.getWeatherFromLatAndLng(
                    response.results[0].geometry.lat,
                    response.results[0].geometry.lng
                )
                    .then((response) => {
                        setWeatherData(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAddressAndWeather();
    }, []);

    return (
        <>
            <GlobalStyle />
            {!address.length || !weatherData ? (
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
