import React, { useContext, useState } from 'react'

import { WeatherContext } from '../../contexts/WeatherContext'
import { Row } from '../Grid'

const Container = () => {
    const { data, dispatch } = useContext(WeatherContext)
    const [city, setCity] = useState('')

    const handleTest = e => {
        dispatch({ type: 'CHECK_WEATHER', city: city })
    }

    return (
        <Row>
            <input
                type='text'
                value={city}
                onChange={e => {
                    setCity(e.target.value)
                }}
            />
            <button onClick={handleTest}>Test</button>

            <p>{data.city}</p>
        </Row>
    )
}

export default Container
