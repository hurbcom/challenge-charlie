const filterForecastData = (forecast) => {
  const mpsToKph = (mps) => {
    let kph = Math.round(mps * 3.6);
    return `${kph}km/h`;
  };

  const degToDirection = (degrees) => {
    const directions = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'L',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSO',
      'SO',
      'OSO',
      'O',
      'ONO',
      'NO',
      'NNO',
    ];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const parseWeatherIcons = (icon) => {
    const weatherIcons = {
      '01d': 'B',
      '01n': 'B',
      '02d': 'H',
      '02n': 'H',
      '03d': 'N',
      '03n': 'N',
      '04d': 'Y',
      '04n': 'Y',
      '09d': 'S',
      '09n': 'S',
      '10d': 'R',
      '10n': 'R',
      '11d': 'O',
      '11n': 'O',
      '13d': 'W',
      '13n': 'W',
    };

    for (const key in weatherIcons) {
      if (key === icon) {
        const correctIcon = weatherIcons[key];
        return correctIcon;
      }
    }
  };

  if (forecast) {
    const { icon: todayIcon, description: todayDescription } = forecast[0].weather[0];

    const { pressure: todayPressure, humidity: todayHumidity, temp: todayTemp } = forecast[0].main;
    const { deg: todayDeg, speed: todaySpeed } = forecast[0].wind;

    const { icon: tomorrowIcon, description: tomorrowDescription } = forecast[1].weather[0];
    const { temp: tomorrowTemp } = forecast[1].main;

    const { icon: dayAfterTomorrowIcon, description: dayAfterTomorrowDescription } =
      forecast[2].weather[0];
    const { temp: dayAfterTomorrowIconTemp } = forecast[2].main;

    const formattedForecast = {
      today: {
        icon: parseWeatherIcons(todayIcon),
        temp: `${Math.round(todayTemp)} °C`,
        description: capitalizeFirstLetter(todayDescription),
        wind: `${degToDirection(todayDeg)} ${mpsToKph(todaySpeed)}`,
        pressure: `${todayPressure} hPA`,
        humidity: `${todayHumidity}%`,
      },
      tomorrow: {
        icon: parseWeatherIcons(tomorrowIcon),
        temp: `${Math.round(tomorrowTemp)} °C`,
        description: capitalizeFirstLetter(tomorrowDescription),
      },
      dayAfterTomorrow: {
        icon: parseWeatherIcons(dayAfterTomorrowIcon),
        temp: `${Math.round(dayAfterTomorrowIconTemp)} °C`,
        description: capitalizeFirstLetter(dayAfterTomorrowDescription),
      },
    };
    return formattedForecast;
  }
};

export default filterForecastData;
