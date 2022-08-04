import { useEffect, useState } from "react";
import { GeolocationService } from "./services/GeolocationService";
import { GlobalStyle } from "./styles/global";
import { tempConvertToCelsius } from "./utils/tempConvert";

interface IWeather {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

function App() {
    const [address, setAddress] = useState([]);
    const [weather, setWeather] = useState<IWeather>();

    const getAddressAndWeather = async () => {
        await GeolocationService.getUserLocation()
            .then(async (response) => {
                setAddress(response.results[0].formatted);
                await GeolocationService.getWeather(
                    response.results[0].geometry.lat,
                    response.results[0].geometry.lng
                )
                    .then((response) => {
                        console.log(response);
                        setWeather(response.main);
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

        //if weather stop updating
    }, []);

    return (
        <>
            <GlobalStyle />
            {!address.length ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>{address}</h1>
                    <h2>{JSON.stringify(weather)}</h2>
                    {weather && <h3>{tempConvertToCelsius(weather.temp)}ºC</h3>}
                </>
            )}
        </>
    );
}

export default App;
