import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faThermometerHalf, faWind } from '@fortawesome/free-solid-svg-icons'

function ForecastSummary({ forecast, variant }) {
    return (
        <Box
            display='flex'
            flexDirection='column'
        >
            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                marginBottom='8px'
            >
                <Box style={{ width: 22 }}>
                    <FontAwesomeIcon icon={faWind} size='lg' />
                </Box>
                <Typography variant={variant}>NO {forecast.windSpeed}km/h</Typography>
            </Box>
            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                marginBottom='8px'
            >
                <Box style={{ width: 22 }}>
                    <FontAwesomeIcon icon={faTint} size='lg' />
                </Box>
                <Typography variant={variant}>{forecast.humidity}%</Typography>
            </Box>
            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
            >
                <Box style={{ width: 22 }}>
                    <FontAwesomeIcon icon={faThermometerHalf} size='lg' />
                </Box>
                <Typography variant={variant}>{forecast.pressure}hPA</Typography>
            </Box>
        </Box>
    )
}

export default ForecastSummary