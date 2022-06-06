const fetchWeather = async (location: string): Promise<any> => {
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

export default fetchWeather;
