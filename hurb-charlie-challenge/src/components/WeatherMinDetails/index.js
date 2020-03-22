import React from 'react';
import { useSelector } from 'react-redux';
import { fromUnixTime, format } from 'date-fns';
import { trunc } from 'math';
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
                              'd MMMM yyyy'
                          )
                        : 'Carregando...'}
                </strong>
                <br />
                <button type="button">
                    {trunc(weatherData.list[8].main.temp)} °
                </button>
            </span>
            <br />
            <br />
            <span>
                <strong>
                    {weatherData.list[16]
                        ? format(
                              fromUnixTime(weatherData.list[16].dt),
                              'd MMMM yyyy'
                          )
                        : 'Carregando...'}
                </strong>
                <br />
                <button type="button">
                    {trunc(weatherData.list[16].main.temp)} °
                </button>
            </span>
            <br />
            <br />
        </Container>
    );
}
