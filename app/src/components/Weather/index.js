import React, { useState, useEffect } from 'react'
import moment from 'moment'
import WeatherItem from '../WheatherItem'
import { celciusToFarenheit, farenheitToCelcius } from '../../utils'
import './index.sass'

function Weather({
    weather,
    onSearch,
    onchangeTemperature,
    isCelsius
}) {

    const [location, setLocation] = useState('')
    const [days, setDays] = useState(weather.list)

    const handleDays = () => {
        const { list } = weather
        const filteredDays = list.filter((item) => {
            return moment(item.dt_txt).isBefore(moment().add(2, 'days'))
        })
        setDays(filteredDays)
    }

    useEffect(() => {
        handleDays()
    }, [weather])


    return (
        <div className="weather-container">
            <div className="header">
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button onClick={() => location && onSearch(location)}>Search</button>
            </div>
            <div className="location">
                <h1>{weather.city.name}, {weather.city.country}</h1>
            </div>
            <div className="content">
                {days.length > 0 && days.map((item, index) => (
                    <WeatherItem 
                        wheather={item} 
                        key={index}
                        onchangeTemperature={onchangeTemperature} 
                        isCelsius={isCelsius}
                    />
                ))}
            </div>
        </div>
    )
}

export default Weather