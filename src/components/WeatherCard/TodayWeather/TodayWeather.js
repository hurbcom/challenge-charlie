import React from 'react';
import { Grid } from '@material-ui/core';

import { checkColorTemperature, checkMoodIcon } from '../../../utils/weatherConditionsStyle';

export default ({ convertUnits, currentWeather, unitSelected }) => {

  return (
    <div style={{ backgroundColor: checkColorTemperature(currentWeather.temp, unitSelected), paddingBottom: '30px', paddingTop: '10px' }}>
      <Grid container direction="row">
        <Grid item md={6} xs={12} className="align-s-center text-center">
          <span
            style={{ fontSize: '6em', color: '#fff' }}
            className="icon"
            data-icon={checkMoodIcon(currentWeather.condition)}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="weather-info">
            <div style={{ marginBottom: '20px', color: '#fff', textAlign: 'center' }}>
              <h4 style={{ textTransform: 'uppercase', fontFamily: 'Roboto Bold' }}>Hoje</h4>
              <p onClick={() => convertUnits()}>{currentWeather.temp} º{unitSelected}</p>
            </div>
            <div style={{ color: '#fff', textAlign: 'center' }}>
              <h4 style={{ marginBottom: '5px', textTransform: 'capitalize', fontFamily: 'Roboto Bold' }}>{currentWeather.conditionDescription}</h4>
              <p>Vento: {currentWeather.windDirection} {currentWeather.windSpeed}km/h</p>
              <p>Humidade: {currentWeather.humidity}%</p>
              <p>Vento: {currentWeather.pressure}hPA</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
