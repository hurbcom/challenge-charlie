import React, { useEffect, useState } from 'react'
import Today from '../components/today'
import Tomorrow from '../components/tomorrow'
import AfterTomorrow from '../components/after-tomorrow'
import Background from '../components/background'
import CurrentLocation from '../components/current-location'
import BackgroundOverlay from '../components/background-overlay'
import { Grid } from '@material-ui/core'

function WeatherForecastPage() {
    return (
        <Background>
            <BackgroundOverlay>
                <Grid
                    container
                    direction='column'
                    spacing='2'
                >
                    <Grid item>
                        <CurrentLocation />
                    </Grid>
                    <Grid item>
                        <Today />
                    </Grid>
                    <Grid 
                        container
                        direction='row'
                        spacing='1'
                    >
                        <Grid item>
                            <Tomorrow />
                        </Grid>
                        <Grid item>
                            <AfterTomorrow />
                        </Grid>
                    </Grid>
                </Grid>
            </BackgroundOverlay>
        </Background>
    )
}

export default WeatherForecastPage
