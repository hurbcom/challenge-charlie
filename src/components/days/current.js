import axios from 'axios'
import ReactTooltip from 'react-tooltip'
import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'

import searchIcon from '../../assets/search.svg'
import inputIcon from '../../assets/input-icon.svg'

import {
    TodayInformation,
    CurrentSection,
    InputContainer,
    StyledInput,
    InputSearch,
    InputIcon,
    Today,
} from './styles'

import {
    getWindDirection,
    kelvinToCelsius,
    getTempScale,
    convertWindSpeed,
    getTempIcon,
    snackbarOptions,
} from '../../utils'

import Title from './title'

const Current = ({
    data,
    color,
    setColor,
    city,
    isCelsius,
    setIsCelsius,
    changeLocation,
    setLoading,
}) => {
    const [icon, setIcon] = useState()
    const [humidity, setHumidity] = useState()
    const [pressure, setPressure] = useState()
    const [windSpeed, setWindSpeed] = useState()
    const [temperature, setTemperature] = useState()
    const [windDegrees, setWindDegrees] = useState()
    const [openSnackbar] = useSnackbar(snackbarOptions)
    const [description, setDescription] = useState('')

    const searchLocation = async (city) => {
        setLoading(true)
        await axios
            .get(process.env.REACT_APP_OPEN_CAGE_URL, {
                params: {
                    q: city,
                    key: process.env.REACT_APP_OPEN_CAGE_KEY,
                },
            })
            .then(({ data }) => {
                if (data.results.length === 0) {
                    openSnackbar('Não encontramos resultado para sua busca.')
                    return
                }
                const location = data.results[0]
                changeLocation(
                    location.formatted,
                    location.geometry.lat,
                    location.geometry.lng
                )
            })
            .catch(() => {
                openSnackbar(
                    'Ops, algo deu errado. Por favor, tente novamente.'
                )
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (data) {
            const now = new Date(data.dt * 1000)
            const temp = kelvinToCelsius(data.temp)

            setTemperature(temp)
            setHumidity(data.humidity)
            setPressure(data.pressure)
            setColor(getTempScale(temp))
            setWindDegrees(data.wind_deg)
            setDescription(data.weather[0].description)
            setWindSpeed(convertWindSpeed(data.wind_speed))
            setIcon(getTempIcon(data.weather[0].id, now.getHours()))
        }
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault()
        searchLocation(e.target[0].value)
    }

    const searchClicked = () => {
        const value = document.getElementById('search-input').value
        if (value) searchLocation(value)
    }

    return (
        <CurrentSection color={color}>
            <InputContainer onSubmit={handleSubmit}>
                <InputIcon
                    src={inputIcon}
                    alt='input-icon'
                    data-tip='Para resultados mais precisos, digite cidade e estado separados por vírgula.'
                />
                <ReactTooltip effect='solid' />
                <StyledInput
                    type='text'
                    name='location'
                    id='search-input'
                    placeholder='Digite a cidade'
                />
                <InputSearch
                    src={searchIcon}
                    alt='search-icon'
                    onClick={searchClicked}
                />
            </InputContainer>
            {data ? (
                <>
                    <Title
                        isCelsius={isCelsius}
                        label={`${city} - Hoje`}
                        temperature={temperature}
                        description={description}
                        onTemperatureClick={setIsCelsius}
                    />
                    <Today>
                        <img src={icon} alt='today-temperature-icon' />
                        <TodayInformation>
                            <p>
                                Vento: {getWindDirection(windDegrees)}{' '}
                                {windSpeed}
                                {'km/h'}
                            </p>
                            <p>
                                Humidade: {humidity} {'%'}
                            </p>
                            <p>
                                Pressão: {pressure} {'hPA'}
                            </p>
                        </TodayInformation>
                    </Today>
                </>
            ) : (
                <div>Hoje</div>
            )}
        </CurrentSection>
    )
}

export default Current
