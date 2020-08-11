import React from 'react';

import {
    Day,
    DayIcon,
    DayInfo,
    DayInfoTitle,
    DayInfoTemperature,
    DayInfoCondition
} from './WeatherDayCard.css.js';
import getWindDirection from '../services/windDirection';
import formatNumber from '../services/number';
import WeatherDayExtraInfo from './WeatherDayExtraInfo';


export default function WeatherDayCard(props) {
    return (
        <Day color={props.cardColor}>
            <DayIcon
                data-testid="day-icon"
                condition={props.dayWeather ? props.dayWeather.weather[0].icon.replace('n', 'd') : '02d'}
            />

            <DayInfo>
                <DayInfoTitle>
                    {props.dayName}
                </DayInfoTitle>

                <DayInfoTemperature onClick={props.handleChangeUnit}>
                    {props.isCelsius ?
                        `${formatNumber(props.dayWeather ? props.dayWeather.temp.day : 0, 0)}°C` :
                        `${formatNumber(props.dayWeather ? props.dayWeather.temp.day * 9 / 5 + 32 : 0, 0)}°F`
                    }
                </DayInfoTemperature>

                {props.expanded ? (
                    <React.Fragment>
                        <DayInfoCondition>
                            {props.dayWeather ? props.dayWeather.weather[0].description : 'Carregando...'}
                        </DayInfoCondition>

                        <WeatherDayExtraInfo
                            label="Vento"
                            value={props.dayWeather ? (
                                `${getWindDirection(props.dayWeather.wind_deg)} ${formatNumber(props.dayWeather.wind_speed, 1)}Km/h`
                            ) : 0}
                        />

                        <WeatherDayExtraInfo
                            label="Humidade"
                            value={`${formatNumber(props.dayWeather ? props.dayWeather.humidity : 0, 1)}%`}
                        />

                        <WeatherDayExtraInfo
                            label="Pressão"
                            value={`${props.dayWeather ? props.dayWeather.pressure : 0}hPA`}
                        />
                    </React.Fragment>
                ) : null}
            </DayInfo>
        </Day>
    );
}