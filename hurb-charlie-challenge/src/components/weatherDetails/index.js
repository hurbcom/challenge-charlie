import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, fromUnixTime } from 'date-fns';
import { trunc } from 'math';
import WeatherIcon from '../../assets/meteocons-icons/SVG/2.svg';
import * as WeatherActions from '../../store/modules/weather/actions';

import { Container } from './styles';

export default function WeatherDetails() {
    const weatherData = useSelector(state => state.weather.data.weatherData);
    const temperature = useSelector(
        state => state.weather.data.weatherData.list[0].main.temp
    );

    const dispatch = useDispatch();

    function handleChangeTemp() {
        dispatch(WeatherActions.WeatherChangeTemperatureRequest(weatherData));
    }
    return (
        <Container>
            <div>
                <div>
                    <img src={WeatherIcon} alt="" />
                </div>
                <div>
                    <span>
                        {weatherData.list[0]
                            ? format(
                                  fromUnixTime(weatherData.list[0].dt),
                                  'd MMMM yyyy'
                              )
                            : 'Carregando...'}
                    </span>
                    <br />
                    <span>
                        {weatherData.list[0].weather[0].main
                            ? weatherData.list[0].weather[0].main
                            : 'Carregando...'}
                    </span>
                    <br />
                    <br />
                    <button
                        type="button"
                        onClick={() => handleChangeTemp(weatherData)}
                    >
                        {trunc(temperature)} °
                    </button>
                    <br />
                    <span>
                        Vento: NO
                        {weatherData.list[0].wind.speed
                            ? ` ${weatherData.list[0].wind.speed}`
                            : 'Carregando...'}
                        km/h
                    </span>
                    <br />
                    <span>
                        Humidade:
                        {weatherData.list[0].main.humidity
                            ? ` ${weatherData.list[0].main.humidity}%`
                            : 'Carregando...'}
                    </span>
                    <br />
                    <span>
                        Pressão:
                        {weatherData.list[0].main.pressure
                            ? ` ${weatherData.list[0].main.pressure}hPA`
                            : 'Carregando...'}
                    </span>
                </div>
            </div>
        </Container>
    );
}
