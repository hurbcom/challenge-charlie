import React, { useEffect, useState } from 'react'
import Background from '../components/background'
import CurrentLocation from '../components/current-location'
import BackgroundOverlay from '../components/background-overlay'
import { Box, Select } from '@material-ui/core'
import Forecast from '../components/forecast'

function WeatherForecastPage() {
    return (
        <Background>
            <BackgroundOverlay>
                <Box>
                    <CurrentLocation />
                    <div style={{ height: 8 }}></div>
                    <Forecast
                        index={0}
                        title='Agora'
                        titleVariant='h4'
                        tempVariant='h1'
                        unitVariant='h4'
                        forecastVariant='body1'
                    />
                    <div style={{ height: 8 }}></div>
                    <Box
                        display='flex'
                        flexDirection='row'
                    >
                        <Forecast
                            index={1}
                            titleVariant='h6'
                            tempVariant='h3'
                            unitVariant='h5'
                            forecastVariant='body2'
                            vertical
                        />
                        <div style={{ width: 8 }}></div>
                        <Forecast
                            index={2}
                            titleVariant='h6'
                            tempVariant='h3'
                            unitVariant='h5'
                            forecastVariant='body2'
                            vertical
                        />
                    </Box>
                </Box>
            </BackgroundOverlay>
        </Background>
    )
}

export default WeatherForecastPage
