function setWeatherForecastBackgroundColor(temperature) {
  const lowTemperatureGradient = {
    today: 'rgba(9, 132, 227, .7)',
    tomorrow: 'rgba(8, 118, 202, .7)',
    afterTomorrow: 'rgba(7, 103, 178, .7)'
  };

  const mildTemperatureGradient = {
    today: 'rgba(241, 196, 15, .7)',
    tomorrow: 'rgba(218, 177, 13, .7)',
    afterTomorrow: 'rgba(194, 157, 11, .7)'
  };

  const highTemperatureGradient = {
    today: 'rgba(231, 76, 60, .7)',
    tomorrow: 'rgba(228, 55, 37, .7)',
    afterTomorrow: 'rgba(214, 44, 26, .7)'
  };

  const locationNotFoundTemperatureGradient = {
    today: 'rgba(149, 165, 166, .7)',
    tomorrow: 'rgba(135, 153, 154, .7)',
    afterTomorrow: 'rgba(121, 141, 143, .7)'
  }

  if (temperature < 15) {
    return lowTemperatureGradient;
  }

  if (temperature >= 15 && temperature <= 35) {
    return mildTemperatureGradient;
  }

  if (temperature > 35) {
    return highTemperatureGradient;
  }

  return locationNotFoundTemperatureGradient;
}

export default setWeatherForecastBackgroundColor;