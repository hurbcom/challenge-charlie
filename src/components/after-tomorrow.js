import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Card, Typography, CardContent } from '@material-ui/core'

function AfterTomorrow() {

    const forecast = useSelector(state => state.weatherForecast.afterTomorrow, shallowEqual)

    return (
        <Card>
            <CardContent>
                <Typography variant='h6'>
                    Depois
                </Typography>
                <Typography variant='h3'>
                    {forecast && forecast.celcius}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AfterTomorrow
