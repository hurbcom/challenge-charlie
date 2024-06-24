import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as CompassIcon } from '../assets/icons/compass.svg'
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import { useLocationContext } from '../stores/LocationProvider'
import { useWeatherForecastContext } from '../stores/WeatherForecastProvider'
import { COLORS } from '../utils/colors'

const InputContainer = styled.input`
    width: 100%;
    height: fit-content;
    color: ${COLORS.gray};
    font-family: Roboto;
    font-size: 30px;
    font-weight: bold;
    border: none;

    &:focus{
        outline: none;
        border: none
    }
`

const InputView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    background-color: ${COLORS.white};
`
const StyledIcon = css`
    padding: 5px;
    width: 70px;
    height: 70px;
    fill: ${COLORS.gray};
    margin-inline: 10px;

`

const StyledCompassIcon = styled(CompassIcon)`
    ${StyledIcon}
`

const StyledSearchIcon = styled(SearchIcon)`
    ${StyledIcon}
    cursor: pointer;
`

// Component that renders the input area in the application, containing actions for searching
// when the Enter key is pressed and when the search button is clicked. It is responsible for calling
// the function in the API file that returns weather data.
const Input: React.FC = () => {
    const { city } = useLocationContext()
    const { fetchWeatherForecast } = useWeatherForecastContext();

    const [inputText, setInputText] = useState<string>('')

    // When the city is updated in the context after requesting to get the city, the value is directly inserted into the input.
    useEffect(() => {
        if (city) {
            setInputText(city)
        }
    }, [city])

    // Triggers the request when the Enter key is pressed.
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            fetchWeatherForecast(inputText);
        }
    };


    return (
        <InputView >
            <StyledCompassIcon />
            <InputContainer
                type='text'
                value={inputText}
                onChange={(e) => {
                    setInputText(e.target.value)
                }}
                onKeyDown={handleKeyPress}
            />
            <StyledSearchIcon onClick={() => fetchWeatherForecast(inputText)} />
        </InputView>
    )
}

export default Input