import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, fromUnixTime } from 'date-fns';
import { trunc } from 'math';
import * as WeatherActions from '../../store/modules/weather/actions';
import getIcon from '../../util/weatherIcons';
import handleEnglishToPortuguese from '../../util/translate';
import { Container, ImageIcon } from './styles';

export default function WeatherDetails() {
    const { data } = useSelector(state => state.weather);
    const [temperature, setTemperature] = useState(null);
    const [wind, setWind] = useState(null);
    const [weather, setWeather] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [pressure, setPressure] = useState(null);
    const [icon, setIcon] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState(null);
    const dispatch = useDispatch();

    function handleBackgroundColor(temp) {
        if (temp < 15 || (temp > 180 && temp < 288)) {
            return '#013ADF';
        }
        if ((temp > 15 && temp < 35) || (temp > 288 && temp < 318)) {
            return '#ffcc00';
        }
        if ((temp > 35 && temp < 333) || (temp > 288 && temp < 318)) {
            return '#DF0101';
        }
        return '#585858';
    }

    function handleChangeTemp(temp) {
        dispatch(WeatherActions.WeatherChangeTemperatureRequest(temp));
    }

    useEffect(() => {
        if (data) {
            setTemperature(data.weatherData.list[0].main.temp);
            setWind(data.weatherData.list[0].wind.speed);
            setWeather(
                handleEnglishToPortuguese(
                    data.weatherData.list[0].weather[0].main
                )
            );
            setHumidity(data.weatherData.list[0].main.humidity);
            setPressure(data.weatherData.list[0].main.pressure);
            setIcon(getIcon(weather));
            setBackgroundColor(handleBackgroundColor(temperature));
        }
    }, [data, wind, weather, humidity, pressure, icon, temperature]);

    return (
        <Container background={backgroundColor}>
            <div>
                <ImageIcon src={icon} alt="" />
                <div>
                    <span>
                        <strong>
                            {data
                                ? format(
                                      fromUnixTime(data.weatherData.list[0].dt),
                                      'd MMMM yyyy'
                                  )
                                : 'Carregando...'}
                        </strong>
                    </span>
                    <br />
                    <button
                        type="button"
                        onClick={() => handleChangeTemp(data.weatherData)}
                    >
                        <strong>{trunc(temperature)} °</strong>
                    </button>
                    <br />
                    <br />

                    <span>
                        <strong>
                            {weather ? `${weather}` : 'Carregando...'}
                        </strong>
                    </span>
                    <br />
                    <br />
                    <span>
                        <strong>
                            Vento: NO
                            {wind ? ` ${wind}` : 'Carregando...'}
                            km/h
                        </strong>
                    </span>
                    <br />
                    <span>
                        <strong>
                            Humidade:
                            {humidity ? ` ${humidity}%` : 'Carregando...'}
                        </strong>
                    </span>
                    <br />
                    <span>
                        <strong>
                            Pressão:
                            {pressure ? ` ${pressure}hPA` : 'Carregando...'}
                        </strong>
                    </span>
                </div>
            </div>
        </Container>
    );
}
