import React, { useEffect, useState } from 'react'
import Today from '../components/today'
import Tomorrow from '../components/tomorrow'
import AfterTomorrow from '../components/after-tomorrow'
import { getWeatherForecast } from '../services/weather-forecast.service'

function WeatherForecastPage() {
    const [weatherForecast, setWeatherForecast] = useState({})

    useEffect(() => {
        const x = async () => {
            const y = await getWeatherForecast(-22.9028, -43.2075)
            setWeatherForecast(y)
        }
        x()
    }, [])

    return (
        <div>
            <p>Current location</p>
            <Today forecast={weatherForecast.today}/>
            <Tomorrow forecast={weatherForecast.tomorrow}/>
            <AfterTomorrow forecast={weatherForecast.afterTomorrow}/>
            <p>Unidade</p>
        </div>
    )
}

export default WeatherForecastPage
