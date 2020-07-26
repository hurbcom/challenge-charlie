import React from 'react';
import { Grid } from '@material-ui/core';

import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

export default () => (
  <div style={{ backgroundColor: 'rgba(255, 247, 0, 0.8)' }}>
    <Grid container direction="row">
      <Grid item sm={6} className="align-s-center text-center">
        <WbSunnyOutlinedIcon style={{ fontSize: '6em', color: '#fff' }} />
      </Grid>
      <Grid item sm={6}>
        <div className="weather-info">
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ textTransform: 'uppercase' }}>Hoje</h4>
            <p>32ºC</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '5px' }}>Ensolarado</h4>
            <p>Vento: NO 6.4km/h</p>
            <p>Humidade: 78%</p>
            <p>Vento: 100 3hPA</p>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
)
