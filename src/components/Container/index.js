import React, { useContext, useState, useEffect, useCallback } from 'react'
import {
    getLocation,
    getWeatherInfoFromCoords,
    toCelsius,
    toFahrenheit,
    toKMH,
    toMPH,
    weatherTranslateDescription,
    getBackgroundImage
} from '../../helpers/utils'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Column } from '../Grid'

import './container.scss'

const Container = () => {
    const { data, dispatch } = useContext(WeatherContext)

    const init = async e => {
        dispatch({ type: 'LOAD_START' })

        const image = await getBackgroundImage()
        setBackgroundImage(`url(${image.url})`)

        const pos = await getLocation()
        const wheater = await getWeatherInfoFromCoords(
            pos.coords.latitude,
            pos.coords.longitude
        )
        dispatch({ type: 'WEATHER_DATA_LOAD_COMPLETE', data: wheater })
        
        dispatch({ type: 'LOAD_COMPLETE' })
    }

    const getDegree = deg => {
        return data.currentDegreeMetric === 'celsius'
            ? toCelsius(deg)
            : toFahrenheit(deg)
    }

    const getWindSpeed = spd => {
        return data.currentDegreeMetric === 'celsius' ? toKMH(spd) : toMPH(spd)
    }

    const changeDegreeMetric = () => {
        const newMetric =
            data.currentDegreeMetric === 'celsius' ? 'fahrenheit' : 'celsius'
        dispatch({ type: 'CHANGE_DEGREE_METRIC', data: newMetric })
    }

    const [backgroundImage, setBackgroundImage] = useState('')

    useEffect(() => {
        init()
    }, [])

    return (
        <Column as='main' className="image_container" style={ {backgroundImage: backgroundImage} }>
            { data.loading && 'LOADING' }

            {data.backgroundData.image && 
              <p className="image_container_copyright">{data.backgroundData.copyright}</p>
            }
            {data.wheaterData.today && (
                <div onClick={changeDegreeMetric}>
                    <p>
                        {data.wheaterData.city}, {data.wheaterData.country_code}
                    </p>
                    <p>Hoje</p>
                    <p>{getDegree(data.wheaterData.today.main.temp)}&deg;</p>
                    <p>
                        {weatherTranslateDescription(
                            data.wheaterData.weatherDescription
                        )}
                    </p>

                    <p>
                        Vento: {data.wheaterData.windDirection}{' '}
                        {getWindSpeed(data.wheaterData.windSpeed)}
                    </p>
                    <p>Humidade: {data.wheaterData.humidity}%</p>
                    <p>Pressão: {data.wheaterData.pressure}hPa</p>
                    <hr />
                    <p>Amanhã</p>
                    <p>{getDegree(data.wheaterData.tomorrow.main.temp)}&deg;</p>
                    <hr />
                    <p>Depois de amanhã</p>
                    <p>
                        {getDegree(data.wheaterData.afterTomorrow.main.temp)}
                        &deg;
                    </p>
                </div>
            )}
        </Column>
    )
}

export default Container
