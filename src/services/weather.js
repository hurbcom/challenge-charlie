import BrazilStates from '../const/brazil_states.json';
import builder from '../builders';
const { text } = builder;

const weatherAPIGenerator = (city, state) => {
  const found = BrazilStates.UF.map((uf) => {
    if (uf.stateName.toLowerCase() === state) {
      return `http://api.openweathermap.org/data/2.5/weather?q=${city},${uf.abbr.toLowerCase()}%7D%7D&APPID=7ba73e0eb8efe773ed08bfd0627f07b8`;
    }
  }).filter((uf) => uf);

  if (found.length) return found[0];
  else throw new Error('State not found.');
};

const getWeather = async (city, state) => {
  const url = weatherAPIGenerator(city, state);
  const weatherData = await fetch(url);
  const response = await weatherData.json();

  const description = text.capitalizeLetters(response.weather[0].description);
  return {
    ...response.wind,
    ...response.main,
    ...response.rain,
    ...response.weather[0],
    description,
    temp: 16
    //temp: numbers.roundTwoPlaces(temperatures.kelvinToCelsius(response.main.temp)),
  };
};

export default {
  getWeather
};
