import React from 'react';
import { useSelector } from 'react-redux';
import { fromUnixTime, format } from 'date-fns';
import { Container } from './styles';

export default function WeatherMinDetails() {
    const weatherData = useSelector(state => state.weather.data.weatherData);

    return (
        <Container>
            <span>
                <strong>
                    {weatherData.list[8]
                        ? format(
                              fromUnixTime(weatherData.list[8].dt),
                              "do 'de' MMMM yyyy"
                          )
                        : 'Carregando...'}
                </strong>
            </span>
            <br />
            <br />
            <span>
                <strong>
                    {weatherData.list[8]
                        ? format(
                              fromUnixTime(weatherData.list[16].dt),
                              "do 'de' MMMM yyyy"
                          )
                        : 'Carregando...'}
                </strong>
            </span>
            <br />
            <br />
        </Container>
    );
}
