const windDirections = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO', 'N'];

export const formatData = (data, isError) => {
  if (isError || !data) {
    const weatherData = [1, 2, 3];
    return { weatherData };
  }

  const currentDay = [
    {
      day: 'hoje',
      weatherId: data?.data.current.weather[0].id,
      temperature: data?.data.current.temp.toFixed(0),
      description: data?.data.current.weather[0].description,
      wind: {
        direction: windDirections[parseInt(data?.data.current.wind_deg / 45)],
        speed: (data?.data.current.wind_speed * 3.6).toFixed(1),
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
      weatherId: curr.weather[0].id,
      temperature: curr.temp.day.toFixed(0),
      description: curr.weather[0].description,
      wind: {
        direction: windDirections[parseInt(curr.wind_deg / 45)],
        speed: (curr.wind_speed * 3.6).toFixed(1),
      },
      humidity: curr.humidity,
      pressure: curr.pressure,
    };

    return [...stack, dayWeather];
  }, currentDay);

  return { weatherData };
};
