import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './index.sass'

function Weather({
    weather,
    onSearch
}) {

    const [location, setLocation] = useState('')
    const [days, setDays] = useState([])

    const handleDays = () => {
        const { list } = weather

        const filteredDays = list.filter((item) => {
            return moment(item.dt_txt).isBefore(moment().add(2, 'days'))
        })

        setDays(filteredDays)
    }

    const getDay = (day) => {

        if (moment(day).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY')) {
            return 'Today'
        }
        if (moment(day).format('DD/MM/YYYY') === moment().add(1, 'days').format('DD/MM/YYYY')) {
            return 'Tommorrow'
        }
        if (moment(day).format('DD/MM/YYYY') === moment().add(2, 'days').format('DD/MM/YYYY')) {
            return 'After Tommorrow'
        }

    }

    useEffect(() => {
        handleDays()
    }, [weather])


    return (
        <div className="weather-container">
            <div className="header">
                <input
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button onClick={() => onSearch(location)}>Search</button>
            </div>
            <div className="location">
                <h1>{weather.city.name}</h1>
            </div>
            <div className="content">
                {days.length > 0 && days.map((item, index) => (
                    <div key={index} className={`${getDay(item.dt_txt)} item`}>
                        <div>{getDay(item.dt_txt)} at {moment(item.dt_txt).format('HH:mm')}</div>
                        <div>{item.weather.map((e, i) => (
                            <div key={index}>
                                <img src={`http://openweathermap.org/img/wn/${e.icon}@2x.png`} />
                                <p>Weather: {e.main}, {e.description}</p>
                            </div>
                        ))}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Weather