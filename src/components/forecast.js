import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Card, CardContent, Typography, Box } from '@material-ui/core'
import ForecastSummary from './forecast-summary'
import PropTypes from 'prop-types'
import { relative } from 'path'

function Forecast({
    index,
    title,
    titleVariant,
    tempVariant,
    unitVariant,
    forecastVariant,
    vertical
}) {
    const forecast = useSelector(state => state.weatherForecast.forecasts[index], shallowEqual)

    function getTemp() {
        return forecast.temps.find(p => p.selected).value
    }

    function getUnit() {
        return forecast.temps.find(p => p.selected).unit
    }

    return (
        <>
            {
                forecast &&
                <Card style={{
                    position: 'relative',
                    display: 'flex',
                    flex: 1
                }}>
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: forecast.color,
                            zIndex: 1
                        }}
                    ></div>
                    <CardContent
                        style={{
                            zIndex: 2
                        }}
                    >
                        <Typography variant={titleVariant}>
                            { title || forecast.date }
                        </Typography>
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
                                    {getTemp()}
                                </Typography>
                                <Typography variant={unitVariant} >
                                    {getUnit()}
                                </Typography>
                            </Box>
                            <Box
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                style={{
                                    marginLeft: vertical ? 0 : 32
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
    vertical: PropTypes.bool
}

Forecast.defaultProps = {
    vertical: false
}

export default Forecast