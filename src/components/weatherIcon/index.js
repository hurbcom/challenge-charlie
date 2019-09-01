import React from 'react';

import ClearDay from './../../assets/images/clear-day.svg';
import ClearNight from './../../assets/images/clear-night.svg';
import Cloudy from './../../assets/images/cloudy.svg';
import Fog from './../../assets/images/fog.svg';
import PartlyCloudDay from './../../assets/images/partly-cloudy-day.svg';
import PartlyCloudNight from './../../assets/images/partly-cloudy-night.svg';
import Rain from './../../assets/images/rain.svg';
import Snow from './../../assets/images/snow.svg';
import Wind from './../../assets/images/wind.svg';

const WeatherIcon = (props) => {
  const iconsData = [
    {name: 'clear-day', image: ClearDay},
    {name: 'clear-night', image: ClearNight},
    {name: 'cloudy', image: Cloudy},
    {name: 'fog', image: Fog},
    {name: 'partly-cloudy-day', image: PartlyCloudDay},
    {name: 'partly-cloudy-night', image: PartlyCloudNight},
    {name: 'rain', image: Rain},
    {name: 'snow', image: Snow},
    {name: 'wind', image: Wind},
  ]
  return(
    <React.Fragment>
      {iconsData.filter(item => {
        return item.name === props.iconName
      }).map((icon, i) => <img src={icon.image} alt={icon.name} key={i} />)}
    </React.Fragment>
  );
};

export default WeatherIcon;