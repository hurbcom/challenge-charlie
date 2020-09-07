import React from 'react'
import { ButtonGroup, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUnit } from '../actions/weather-forecast.actions'

function Units() {

    const dispatch = useDispatch()

    const selectedUnit = useSelector(state => state.weatherForecast.selectedUnit)

    function getColor(unit) {
        return selectedUnit === unit ? 'primary' : 'default'
    }

    return (
        <ButtonGroup
            variant="contained"
            fullWidth
        >
            <Button color={getColor('celcius')} onClick={() => dispatch(setSelectedUnit('celcius'))}>°C</Button>
            <Button color={getColor('fahrenheit')} onClick={() => dispatch(setSelectedUnit('fahrenheit'))}>°F</Button>
        </ButtonGroup>
    )
}

export default Units

