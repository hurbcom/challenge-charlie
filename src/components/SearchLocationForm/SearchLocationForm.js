import React, { useContext, useEffect, useState } from 'react'
import { getWeatherInfo, getInfoFromCityName } from '../../helpers/utils'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Row, Column } from '../Grid/Grid'

import './SearchLocationForm.scss'

const SearchLocationForm = () => {
    const { data, dispatch } = useContext(WeatherContext)
    const [city, setCity] = useState('')
    const [cityList, setCityList] = useState([])
    const [selectedCity, setSelectedCity] = useState({
        city: false,
        country_code: false
    })

    const handleCitySearch = async () => {
        if (city.length > 3) {
            let list = await getInfoFromCityName(city)
            setCityList(list)
        }
    }

    const selectCity = v => {
        setSelectedCity(v)
    }

    const handleSelectedCity = async () => {
        const weather = await getWeatherInfo(
            selectedCity.city,
            selectedCity.country_code
        )
        setCity(`${selectedCity.city}, ${selectedCity.country_code}`)
        setCityList([])
        dispatch({ type: 'WEATHER_DATA_LOAD_COMPLETE', data: weather })
    }

    useEffect(() => {
        if (city != `${selectedCity.city}, ${selectedCity.country_code}`)
            handleCitySearch()
    }, [city])

    useEffect(() => {
        if (selectedCity.city && selectedCity.country_code) {
            handleSelectedCity()
        }
    }, [selectedCity])

    return (
        <Row className='search_location_form'>
            <span className='icon'>(</span>
            <input
                type='text'
                className='city_input'
                placeholder='Digite uma cidade'
                value={city}
                onChange={e => {
                    setCity(e.target.value)
                }}
            />
            <Column as='ul' className='city_list_dropdown'>
                {cityList.map((v, i) => {
                    return (
                        <li key={i} onClick={() => selectCity(v)}>
                            <span className='city'>{v.city}, </span>
                            <span className='country'>{v.country_code}</span>
                        </li>
                    )
                })}
            </Column>
        </Row>
    )
}

export default SearchLocationForm
