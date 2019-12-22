import React, { useContext, useEffect, Fragment } from 'react'
import {
    getLocation,
    getWeatherInfoFromCoords,
    getDegree,
    toKMH,
    toMPH,
    weatherTranslateDescription
} from '../../helpers/utils'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Column, Row } from '../Grid/Grid'

import './TodayInfo.scss'

const TodayInfo = () => {
    const { data, dispatch } = useContext(WeatherContext)

    const init = async e => {
        const pos = await getLocation()
        const weather = await getWeatherInfoFromCoords(
            pos.coords.latitude,
            pos.coords.longitude
        )
        dispatch({ type: 'WEATHER_DATA_LOAD_COMPLETE', data: weather })
    }

    const getWindSpeed = spd => {
        return data.currentDegreeMetric === 'celsius' ? toKMH(spd) : toMPH(spd)
    }

    const changeDegreeMetric = () => {
        const newMetric =
            data.currentDegreeMetric === 'celsius' ? 'fahrenheit' : 'celsius'
        dispatch({ type: 'CHANGE_DEGREE_METRIC', data: newMetric })
    }

    const getWeatherDescription = m => {
        return weatherTranslateDescription(m).text
    }

    const getWeatherIcon = m => {
        return weatherTranslateDescription(m).icon
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <Row className={`today_info_container ${data.currentTheme}`}>
            {data.wheaterData.today ? (
                <Fragment>
                    <Column className='icon_wrapper'>
                        <span className='icon'>
                            {getWeatherIcon(
                                data.wheaterData.today.weather[0].main
                            )}
                        </span>
                    </Column>
                    <Column
                        className='content_wrapper'
                        onClick={changeDegreeMetric}
                    >
                        <span className='day'>Hoje</span>
                        <span className='degrees'>
                            {getDegree(data.wheaterData.today.main.temp, data)}
                            &deg;
                        </span>
                        <span className='weather_description'>
                            {getWeatherDescription(
                                data.wheaterData.today.weather[0].main
                            )}
                        </span>
                        <span className='wind_speed'>
                            Vento: {data.wheaterData.windDirection}{' '}
                            {getWindSpeed(data.wheaterData.windSpeed)}
                        </span>
                        <span className='humidity'>
                            Humidade: {data.wheaterData.humidity}%
                        </span>
                        <span className='pressure'>
                            Pressão: {data.wheaterData.pressure}hPa
                        </span>
                    </Column>
                </Fragment>
            ) : (
                <span className="loading_text">Carregando...</span>
            )}
        </Row>
    )
}

export default TodayInfo
