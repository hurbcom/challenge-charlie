import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Card, CardContent, Typography, Box } from '@material-ui/core'
import ForecastSummary from './forecast-summary'
import PropTypes from 'prop-types'
import { relative } from 'path'
import Spacer from './spacer'

function Forecast({
    index,
    title,
    titleVariant,
    tempVariant,
    unitVariant,
    forecastVariant,
    forecastDescriptionVariant: forecastDescriptionVariant,
    vertical
}) {
    const forecast = useSelector(state => state.weatherForecast.forecasts[index], shallowEqual)
    const selectedUnit = useSelector(state => state.weatherForecast.selectedUnit)

    return (
        <>
            {
                forecast &&
                <Card style={{
                    display: 'flex',
                    flex: 1,
                }}>
                    <div
                        style={{
                            width: 10,
                            backgroundColor: forecast.color
                        }}
                    ></div>
                    <CardContent>
                        <Typography variant={titleVariant}>
                            { title || forecast.date }
                        </Typography>
                        <Typography variant={forecastDescriptionVariant}>
                            { forecast.description }
                        </Typography>
                        <Spacer vertical/>
                        <Box
                            display='flex'
                            flexDirection={vertical ? 'column' : 'row'}
                        >
                            <Box
                                display='flex'
                                flexDirection='row'
                                alignItems='flex-start'
                            >
                                <Typography variant={tempVariant} >
                                    {forecast.temps[selectedUnit].value}
                                </Typography>
                                <Typography variant={unitVariant} >
                                    {forecast.temps[selectedUnit].unit}
                                </Typography>
                            </Box>
                            <Box
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                style={{
                                    marginLeft: vertical ? 0 : 16,
                                    paddingTop: vertical ? 16 : 0
                                }}
                            >
                                <ForecastSummary forecast={forecast} variant={forecastVariant} />
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            }
        </>
    )
}

Forecast.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string,
    titleVariant: PropTypes.string.isRequired,
    tempVariant: PropTypes.string.isRequired,
    unitVariant: PropTypes.string.isRequired,
    forecastVariant: PropTypes.string.isRequired,
    forecastDescriptionVariant: PropTypes.string.isRequired,
    vertical: PropTypes.bool
}

Forecast.defaultProps = {
    vertical: false
}

export default Forecast