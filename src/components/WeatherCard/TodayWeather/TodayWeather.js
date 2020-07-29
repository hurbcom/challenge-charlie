import React from 'react';
import { Grid } from '@material-ui/core';

import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

import { checkColorTemperature } from '../../../utils/weatherColor';

export default ({ convertUnits, currentWeather, unitSelected }) => {

  return (
    <div style={{ backgroundColor: checkColorTemperature(currentWeather.temp) }}>
      <Grid container direction="row">
        <Grid item sm={6} className="align-s-center text-center">
          <WbSunnyOutlinedIcon style={{ fontSize: '6em', color: '#fff' }} />
        </Grid>
        <Grid item sm={6}>
          <div className="weather-info">
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ textTransform: 'uppercase' }}>Hoje</h4>
              <p onClick={() => convertUnits()}>{currentWeather.temp} º{unitSelected}</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '5px', textTransform: 'capitalize' }}>{currentWeather.mood}</h4>
              <p>Vento: NO {currentWeather.windSpeed}km/h</p>
              <p>Humidade: {currentWeather.humidity}%</p>
              <p>Vento: {currentWeather.pressure}hPA</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
