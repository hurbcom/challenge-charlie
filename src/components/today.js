import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Card, Typography, CardContent } from '@material-ui/core'

function Today() {

    const forecast = useSelector(state => state.weatherForecast.today, shallowEqual)

    return (
        <Card>
            <CardContent>
                <Typography variant='h4'>
                    Hoje
                </Typography>
                <Typography variant='h1'>
                    {forecast && forecast.celcius}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Today
