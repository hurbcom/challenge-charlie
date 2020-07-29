import React from 'react';

import {
  Grid
} from '@material-ui/core';

import { checkColorTemperature } from '../../../utils/weatherColor';

export default ({ tomorrow, dayAfter, convertUnits, unitSelected }) => (
  <div>
    <Grid container direction="column">
      <div className="future-weather-info">
        <div style={{ backgroundColor: checkColorTemperature(tomorrow.temp) }} onClick={() => convertUnits()}>
          <h4 className="future-weather-day">Amanhã</h4>
          <p>{tomorrow.temp} º{unitSelected}</p>
        </div>
        <div style={{ backgroundColor: checkColorTemperature(dayAfter.temp) }} onClick={() => convertUnits()}>
          <h4 className="future-weather-day">Depois de Amanhã</h4>
          <p>{dayAfter.temp} º{unitSelected}</p>
        </div>
      </div>
    </Grid>
  </div>
);
