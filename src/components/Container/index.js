import React, { useContext, useState, useEffect, useCallback } from 'react'

import { getLocation, getWeatherInfoFromCoords } from '../../helpers/utils'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Row } from '../Grid'

const Container = () => {
    const { data, dispatch } = useContext(WeatherContext)

    const handleTest = async e => {
        dispatch({ type: 'LOAD_START' })
        const pos = await getLocation()
        const wheater = await getWeatherInfoFromCoords(pos.coords.latitude, pos.coords.longitude)

        console.log('>>>', wheater)
    }

    const geoLocationNotAvailable = () => {
        dispatch({ type: 'GELOCATION_NOT_AVAILABLE' })
    }

    useEffect(() => {
        console.log('Initial useEffect')
        // try {
        //     dispatch({
        //         type: 'CHECK_WEATHER_WITH_COORS',
        //         coords: `${pos.coords.latitude},${pos.coords.longitude}`
        //     })
        // } catch (e) {
        //     dispatch({ type: 'GELOCATION_NOT_AVAILABLE' })
        // }
        // const pos = await getLocation()
    }, [])

    return (
        <Row>
            {data.loading && <p>Loading...</p>}

            <button onClick={geoLocationNotAvailable}>Not available</button>
            <button onClick={handleTest}>Test</button>
        </Row>
    )
}

export default Container
