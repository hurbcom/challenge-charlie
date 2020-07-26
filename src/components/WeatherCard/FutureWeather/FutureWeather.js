import React from 'react';

import {
  Grid
} from '@material-ui/core';

export default () => (
  <div>
    <Grid container direction="column">
      <div className="future-weather-info">
        <div style={{ backgroundColor: 'rgba(255, 247, 0, 0.8)' }} >
          <h4 className="future-weather-day">Amanhã</h4>
          <p>25ºC</p>
        </div>
        <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.8)' }}>
          <h4 className="future-weather-day">Depois de Amanhã</h4>
          <p>25ºC</p>
        </div>
      </div>
    </Grid>
  </div>
);
