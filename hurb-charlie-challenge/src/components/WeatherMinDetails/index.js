import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fromUnixTime, format } from 'date-fns';
import { trunc } from 'math';
import * as WeatherActions from '../../store/modules/weather/actions';
import { Container, Content } from './styles';

export default function WeatherMinDetails() {
    const weatherData = useSelector(state => state.weather.data.weatherData);
    let backgroundColor = 'gray';
    const temperature = useSelector(
        state => state.weather.data.weatherData.list[0].main.temp
    );

    const dispatch = useDispatch();

    function handleChangeTemp() {
        dispatch(WeatherActions.WeatherChangeTemperatureRequest(weatherData));
    }

    function handleBackgroundColor(temp) {
        if (temp < 15 || (temp > 180 && temp < 288)) {
            return '#013ADF';
        }
        if ((temp > 15 && temp < 35) || (temp > 288 && temp < 318)) {
            return '#D7DF01';
        }
        if ((temp > 35 && temp < 333) || (temp > 288 && temp < 318)) {
            return '#DF0101';
        }
        return '#585858';
    }

    backgroundColor = handleBackgroundColor(weatherData.list[8].main.temp);

    return (
        <Container>
            <Content background={backgroundColor} opacity={0.9}>
                <div>
                    <strong>
                        {weatherData.list[8]
                            ? format(
                                  fromUnixTime(weatherData.list[8].dt),
                                  'd MMMM yyyy'
                              )
                            : 'Carregando...'}
                    </strong>
                    <br />
                    <button
                        type="button"
                        onClick={() => handleChangeTemp(weatherData)}
                    >
                        <strong>{trunc(temperature)} °</strong>
                    </button>
                </div>
            </Content>
            <Content background={backgroundColor} opacity={0.95}>
                <div>
                    <strong>
                        {weatherData.list[16]
                            ? format(
                                  fromUnixTime(weatherData.list[16].dt),
                                  'd MMMM yyyy'
                              )
                            : 'Carregando...'}
                    </strong>
                    <br />
                    <button
                        type="button"
                        onClick={() => handleChangeTemp(weatherData)}
                    >
                        <strong>{trunc(temperature)} °</strong>
                    </button>
                </div>
            </Content>
        </Container>
    );
}
