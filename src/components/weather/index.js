import React, { Fragment } from "react";
import { Today, Tomorrow, AfterTomorrow } from "./Stylesheet";
import useContainer from "./Container";

const Weather = (props) => {

    const { weather, convertUnit } = useContainer(props);

    const unit = weather?.type == 'metric' ? '°C' : '°F';

    return (
        <Fragment>
            <Today color={weather?.colors[0]}>
                {weather &&
                    <Fragment>
                        <h2>{props.city}</h2>
                        <p>Hoje</p>
                        <p>{weather.today.temp}{unit}</p>
                        <p>{weather.today.weather?.description}</p>
                        <p onClick={convertUnit}>Vento: {weather.today.wind_deg} {weather.today.wind_speed}</p>
                        <p>Humidade: {weather.today.humidity}</p>
                        <p>Pressão: {weather.today.pressure}</p>
                    </Fragment>
                }
            </Today>
            <Tomorrow color={weather?.colors[0]}>
                {weather &&
                    <Fragment>
                        <p>Amanhã</p>
                        <p>{weather?.tomorrow.temp}{unit}</p>
                    </Fragment>
                }
            </Tomorrow>
            <AfterTomorrow color={weather?.colors[0]}>
                {weather &&
                    <Fragment>
                        <p>Depois de amanhã</p>
                        <p>{weather.afterTomorrow.temp}{unit}</p>
                    </Fragment>
                }
            </AfterTomorrow>
        </Fragment>
    );
};

export default Weather;