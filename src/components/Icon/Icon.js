import React from 'react';

const Icon = (props) => {

  // 'compass' : 'icon-compass',
  // 'clouds-flash' : 'icon-clouds-flash',
  // 'sunrise' : 'icon-sunrise',
  // 'sun' : 'icon-sun',
  // 'moon' : 'icon-moon',
  // 'eclipse' : 'icon-eclipse',
  // 'mist' : 'icon-mist',
  // 'wind' : 'icon-wind',
  // 'snowflake' : 'icon-snowflake',
  // 'cloud-sun' : 'icon-cloud-sun',
  // 'cloud-moon' : 'icon-cloud-moon',
  // 'fog-sun' : 'icon-fog-sun',
  // 'fog-moon' : 'icon-fog-moon',
  // 'fog-cloud' : 'icon-fog-cloud',
  // 'fog' : 'icon-fog',
  // 'cloud' : 'icon-cloud',
  // 'cloud-flash' : 'icon-cloud-flash',
  // 'drizzle' : 'icon-drizzle',
  // 'rain' : 'icon-rain',
  // 'windy' : 'icon-windy',
  // 'windy-rain' : 'icon-windy-rain',
  // 'snow' : 'icon-snow',
  // 'snow-heavy' : 'icon-snow-heavy',
  // 'hail' : 'icon-hail',
  // 'clouds' : 'icon-clouds',
  // 'na' : 'icon-na',
  // 'temperature' : 'icon-temperature',

  return <i className={`icon-${props.name}`} style={props.styles}></i>
}

export default Icon;