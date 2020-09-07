import React, { useEffect, useState } from 'react'
import Background from '../components/background'
import LocationSearch from '../components/location-search'
import BackgroundOverlay from '../components/background-overlay'
import { Box, Select, Typography } from '@material-ui/core'
import Forecast from '../components/forecast'
import Units from '../components/units'
import Spacer from '../components/spacer'
import GreatTitle from '../components/great-title'
import { useSelector } from 'react-redux'

function WeatherForecastPage() {

    const ready = useSelector(state => state.weatherForecast.ready)

    return (
        <Background>
            <BackgroundOverlay>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    flex='1'
                >
                    <Box>
                        <GreatTitle />
                        <LocationSearch />
                        <Spacer vertical />
                        <Forecast
                            index={0}
                            title='Agora'
                            titleVariant='h4'
                            tempVariant='h1'
                            unitVariant='h4'
                            forecastVariant='body1'
                            forecastDescriptionVariant='subtitle1'
                        />
                        <Spacer vertical />
                        <Box
                            display='flex'
                            flexDirection='row'
                        >
                            <Forecast
                                index={1}
                                title='Amanhã'
                                titleVariant='h6'
                                tempVariant='h4'
                                unitVariant='h5'
                                forecastVariant='body2'
                                forecastDescriptionVariant='caption'
                                vertical
                            />
                            <Spacer />
                            <Forecast
                                index={2}
                                title='Depois'
                                titleVariant='h6'
                                tempVariant='h4'
                                unitVariant='h5'
                                forecastVariant='body2'
                                forecastDescriptionVariant='caption'
                                vertical
                            />
                        </Box>
                        <Spacer vertical />
                        {ready && <Units />}
                    </Box>
                </Box>
            </BackgroundOverlay>
        </Background>
    )
}

export default WeatherForecastPage
