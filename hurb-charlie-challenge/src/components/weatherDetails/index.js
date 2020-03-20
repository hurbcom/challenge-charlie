import React, { useEffect, useState } from 'react';
import { fromUnixTime, format } from 'date-fns';
import WeatherIcon from '../../assets/meteocons-icons/SVG/2.svg';
import openWeatherApi from '../../services/openWeatherApi';
import { Container } from './styles';
import WeatherMinDetails from '../WeatherMinDetails';

export default function WeatherDetails() {
    const [weatherData, setWeatherData] = useState(null);

    async function getWeatherData(latitudeCoords, longitudeCoords) {
        const response = await openWeatherApi.get('', {
            params: {
                lat: latitudeCoords,
                lon: longitudeCoords,
                appid: '7ba73e0eb8efe773ed08bfd0627f07b8',
                location: null
            }
        });

        setWeatherData(response.data);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                if (latitude && longitude) {
                    getWeatherData(latitude, longitude);
                }
            },
            () => {},
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000
            }
        );
    }, []);

    return (
        <Container>
            <div>
                <div>
                    <img src={WeatherIcon} alt="" />
                </div>
                <div>
                    <span>
                        {weatherData
                            ? `${format(
                                  fromUnixTime(weatherData.list[0].dt),
                                  'MM/dd/yyyy'
                              )}`
                            : 'Carregando...'}
                    </span>
                    <br />
                    <span>
                        {weatherData
                            ? `${weatherData.list[0].main.temp}°`
                            : 'Carregando...'}
                    </span>
                    <br />
                    <span>
                        {weatherData
                            ? `${weatherData.list[0].weather[0].main}`
                            : 'Carregando...'}
                    </span>
                    <br />
                    <span>
                        {weatherData
                            ? `Vento: NO ${weatherData.list[0].wind.speed}`
                            : 'Carregando...'}
                    </span>
                    <br />
                    <span>
                        {weatherData
                            ? `Humidade: ${weatherData.list[0].main.humidity}`
                            : 'Carregando...'}
                    </span>
                    <br />
                    <span>
                        {weatherData
                            ? `Pressão: ${weatherData.list[0].main.pressure}`
                            : 'Carregando...'}
                    </span>
                </div>
            </div>
            <WeatherMinDetails
                day={weatherData ? weatherData.list[8].dt : null}
                tempDay={weatherData ? weatherData.list[8].main.temp : null}
            />
            <WeatherMinDetails
                day={weatherData ? weatherData.list[16].dt : null}
                tempDay={weatherData ? weatherData.list[16].main.temp : null}
            />
        </Container>
    );
}
