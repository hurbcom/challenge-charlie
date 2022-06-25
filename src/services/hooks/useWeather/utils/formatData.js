const windDirections = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO'];

export const formatData = data => {
  const currentDay = [
    {
      day: 'hoje',
      temperature: data?.data.current.temp.toFixed(0),
      description: data?.data.current.weather[0].description,
      wind: {
        direction:
          windDirections[(data?.data.current.wind_deg / 45).toFixed(0)],
        speed: (data?.data.current.wind_speed * 3.6).toFixed(1).toString(),
      },
      humidity: data?.data.current.humidity,
      pressure: data?.data.current.pressure,
    },
  ];

  const weatherData = data?.data.daily.reduce((stack, curr, index) => {
    if (index === 0 || index > 2) {
      return stack;
    }

    const day = index === 1 ? 'amanhã' : 'depois de amanhã';

    const dayWeather = {
      day,
      temperature: curr.temp.day.toFixed(0),
      description: curr.weather[0].description,
      wind: {
        direction: windDirections[(curr.wind_deg / 45).toFixed(0)],
        speed: (curr.wind_speed * 3.6).toFixed(1).toString(),
      },
      humidity: curr.humidity,
      pressure: curr.pressure,
    };

    return [...stack, dayWeather];
  }, currentDay);

  return { weatherData };
};
