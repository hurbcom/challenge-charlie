export const fetchWeather = async (location: string): Promise<any> => {
  console.log(location);
  const openWeatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?appid=889ccf4cff9e104cef05b745c7777936&lang=pt_br&units=metric";
  const locationWeather = await fetch(`${openWeatherUrl}&q=${location}`)
    .then((response) => response.json())
    .then((apiData) => {
      return apiData;
    })
    .catch((error) => {
      return error;
    });
  return locationWeather;
};

export const fetchNextWeather = async (
  latitude: number,
  longitude: number
): Promise<any> => {
  const openWeatherUrl =
    "https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely,alerts&appid=889ccf4cff9e104cef05b745c7777936&lang=pt_br&units=metric";

  const nextWeather = await fetch(
    `${openWeatherUrl}&lat=${latitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((apiData) => {
      return apiData;
    })
    .catch((error) => {
      return error;
    });
  return nextWeather;
};
