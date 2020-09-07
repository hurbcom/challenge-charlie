import React from 'react'
import { Box, Typography } from '@material-ui/core'

function ForecastSummary({ forecast, variant }) {
    return (
        <Box
            display='flex'
            flexDirection='column'
        >
            <Typography variant={variant}>Vento: NO {forecast.windSpeed}km/h</Typography>
            <Typography variant={variant}>Humidade: {forecast.humidity}%</Typography>
            <Typography variant={variant}>Pressão: {forecast.pressure}hPA</Typography>
        </Box>
    )
}

export default ForecastSummary