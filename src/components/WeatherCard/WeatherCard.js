import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

import FutureWeather from './FutureWeather/FutureWeather';
import TodayWeather from './TodayWeather/TodayWeather';

export default () => (
  <div className="d-flex flex-center h-100">
    <Card style={{ width: '50%', backgroundColor: 'transparent' }}>
      <CardContent style={{ padding: 0 }}>
        <div className="card-title">
          <ExploreOutlinedIcon size="small" style={{ color: 'rgba(142, 138, 135, 1)' }} />
          <p style={{ paddingLeft: '10px' }}> Rio de Janeiro, Rio de Janeiro</p>
        </div>

        <TodayWeather />

        <FutureWeather />
      </CardContent>
    </Card>
  </div>
)