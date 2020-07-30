import React from 'react';

import {
  Grid
} from '@material-ui/core';

import { checkColorTemperature, checkMoodIcon } from '../../../utils/weatherConditionsStyle';

export default ({ tomorrow, dayAfter, convertUnits, unitSelected }) => (
  <div className="future-weather-info">
    <Grid container direction="column">
      <Grid item>
        <div className="future-weather-temp" style={{ backgroundColor: checkColorTemperature(tomorrow.temp), color: '#fff', textTransform: 'uppercase', fontWeight: '600', paddingBottom: '20px' }} onClick={() => convertUnits()}>
          <Grid container direction="row">
            <Grid item md={6} xs={12} style={{ marginBottom: '5px' }}>
              <h4>Amanhã</h4>
              <p>{tomorrow.temp} º{unitSelected}</p>
            </Grid>
            <Grid item md={6} xs={12}>
              <span
                style={{ fontSize: '3em', color: '#fff' }}
                className="icon"
                data-icon={checkMoodIcon(tomorrow.condition)}
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item>
        <div className="future-weather-temp" style={{ backgroundColor: checkColorTemperature(dayAfter.temp), color: '#fff', textTransform: 'uppercase', fontWeight: '600' }} onClick={() => convertUnits()}>
          <Grid container direction="row">
            <Grid item md={6} xs={12} style={{ marginBottom: '5px' }}>
              <h4>Depois de Amanhã</h4>
              <p>{dayAfter.temp} º{unitSelected}</p>
            </Grid>
            <Grid item md={6} xs={12}>
              <span
                style={{ fontSize: '3em', color: '#fff' }}
                className="icon"
                data-icon={checkMoodIcon(dayAfter.condition)}
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  </div>
);
