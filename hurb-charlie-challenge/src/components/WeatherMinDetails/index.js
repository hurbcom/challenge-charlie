import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fromUnixTime, format } from 'date-fns';
import { trunc } from 'math';
import * as WeatherActions from '../../store/modules/weather/actions';
import { Container, Content } from './styles';

export default function WeatherMinDetails() {
    const { data } = useSelector(state => state.weather);
    const [temperatureTomorrow, setTemperatureTomorrow] = useState(null);
    const [temperatureNextTomorrow, setTemperatureNextTomorrow] = useState(
        null
    );
    const [dateTomorrow, setDateTomorrow] = useState(null);
    const [dateNextTomorrow, setDateNextTomorrow] = useState(null);
    const [backgroundTomorrow, setBackgroundTomorrow] = useState('gray');
    const [backgroundNextTomorrow, setBackgroundNextTomorrow] = useState(
        'gray'
    );
    const dispatch = useDispatch();

    function handleBackgroundColor(temp) {
        if (temp < 15 || (temp > 180 && temp < 288)) {
            return '#013ADF';
        }
        if ((temp > 15 && temp < 35) || (temp > 288 && temp < 318)) {
            return '#e6b800';
        }
        if ((temp > 35 && temp < 333) || (temp > 288 && temp < 318)) {
            return '#DF0101';
        }
        return '#585858';
    }

    useEffect(() => {
        if (data) {
            setTemperatureTomorrow(data.weatherData.list[8].main.temp);
            setTemperatureNextTomorrow(data.weatherData.list[16].main.temp);
            setDateTomorrow(
                format(fromUnixTime(data.weatherData.list[8].dt), 'd MMMM yyyy')
            );
            setDateNextTomorrow(
                format(
                    fromUnixTime(data.weatherData.list[16].dt),
                    'd MMMM yyyy'
                )
            );
            setBackgroundTomorrow(handleBackgroundColor(temperatureTomorrow));
            setBackgroundNextTomorrow(
                handleBackgroundColor(temperatureNextTomorrow)
            );
        }
    }, [data, temperatureNextTomorrow, temperatureTomorrow]);

    function handleChangeTemp(temp) {
        dispatch(WeatherActions.WeatherChangeTemperatureRequest(temp));
    }

    return (
        <Container>
            <Content background={backgroundTomorrow} opacity={0.9}>
                <div>
                    <strong>{dateTomorrow || 'Carregando...'}</strong>
                    <br />
                    <button
                        type="button"
                        onClick={() => handleChangeTemp(data.weatherData)}
                    >
                        <strong>{trunc(temperatureTomorrow)} °</strong>
                    </button>
                </div>
            </Content>
            <Content background={backgroundNextTomorrow} opacity={0.95}>
                <div>
                    <strong>{dateNextTomorrow}</strong>
                    <br />
                    <button
                        type="button"
                        onClick={() => handleChangeTemp(data.weatherData)}
                    >
                        <strong>{trunc(temperatureNextTomorrow)} °</strong>
                    </button>
                </div>
            </Content>
        </Container>
    );
}
