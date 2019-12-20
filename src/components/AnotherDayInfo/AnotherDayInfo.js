import React, { useContext, useEffect, Fragment } from 'react'
import {
    getLocation,
    getWeatherInfoFromCoords,
    toCelsius,
    toFahrenheit,
    toKMH,
    toMPH,
    weatherTranslateDescription
} from '../../helpers/utils'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Column } from '../Grid/Grid'

import './AnotherDayInfo.scss'

const AnotherDayInfo = props => {
    const { data } = useContext(WeatherContext)

    const getDegree = deg => {
        return data.currentDegreeMetric === 'celsius'
            ? toCelsius(deg)
            : toFahrenheit(deg)
    }

    return (
        <Column className='another_day_info_container'>
            {data.wheaterData.tomorrow && props.day === 'tomorrow' && (
                <Fragment>
                    <p>Amanhã</p>
                    <p>{getDegree(data.wheaterData.tomorrow.main.temp)}&deg;</p>
                </Fragment>
            )}
            {data.wheaterData.afterTomorrow && props.day === 'afterTomorrow' && (
                <Fragment>
                    <p>Depois de amanhã</p>
                    <p>
                        {getDegree(data.wheaterData.afterTomorrow.main.temp)}
                        &deg;
                    </p>
                </Fragment>
            )}
        </Column>
    )
}

export default AnotherDayInfo
