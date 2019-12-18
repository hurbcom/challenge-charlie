import React, { useContext, useState, useEffect, useCallback } from 'react'

import {
    getLocation,
    getWeatherInfoFromCoords,
    toCelsius,
    toFahrenheit
} from '../../helpers/utils'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Row } from '../Grid'

const Container = () => {
    const { data, dispatch } = useContext(WeatherContext)

    const handleTest = async e => {
        dispatch({ type: 'LOAD_START' })
        const pos = await getLocation()
        const wheater = await getWeatherInfoFromCoords(
            pos.coords.latitude,
            pos.coords.longitude
        )
        console.log(wheater)

        dispatch({ type: 'WEATHER_DATA_LOAD_COMPLETE', data: wheater })
    }

    const geoLocationNotAvailable = () => {
        dispatch({ type: 'GELOCATION_NOT_AVAILABLE' })
    }

    const getDegree = deg => {
        return data.currentDegreeMetric === 'celsius'
            ? toCelsius(deg)
            : toFahrenheit(deg)
    }

    const changeDegreeMetric = () => {
      const newMetric = data.currentDegreeMetric === 'celsius' ? 'fahrenheit' : 'celsius'
      dispatch({ type: 'CHANGE_DEGREE_METRIC', data: newMetric })
    }

    return (
        <Row>
            {data.loading && <p>Loading...</p>}
            <div>
                <button onClick={geoLocationNotAvailable}>Not available</button>
                <button onClick={handleTest}>Test</button>
            </div>

            {data.wheaterData.today && (
                <div onClick={changeDegreeMetric}>
                    <p>
                        {data.wheaterData.city}, {data.wheaterData.country_code}
                    </p>
                    <p>
                        Today {getDegree(data.wheaterData.today.main.temp)}&deg;
                    </p>
                    <p>
                        minimun
                        {getDegree(data.wheaterData.today.main.temp_min)}&deg;
                    </p>
                    <p>
                        maximum
                        {getDegree(data.wheaterData.today.main.temp_max)}&deg;
                    </p>
                </div>
            )}
        </Row>
    )
}

export default Container
