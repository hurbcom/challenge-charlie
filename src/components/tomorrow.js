import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Card, Typography, CardContent } from '@material-ui/core'

function Tomorrow() {

    const forecast = useSelector(state => state.weatherForecast.tomorrow, shallowEqual)

    return (
        <Card>
            <CardContent>
                <Typography variant='h6'>
                    Amanhã
                </Typography>
                <Typography variant='h3'>
                    {forecast && forecast.celcius}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Tomorrow
