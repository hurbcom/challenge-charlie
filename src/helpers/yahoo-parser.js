import { convert } from 'helpers';
import ptBr from 'yahoo-translator/PT-BR';


const trim = (str = '') => str.trim();

const getLocation = ({ city, country, region }) => ({
  city,
  country,
  region: trim(region),
});

const getTemperatureByFahrenheit = temp => ({
  C: convert.convertFahrenheitToCelsius(temp),
  F: temp,
});

const getHumidity = ({ humidity }) => ({
  symbol: '%',
  value: humidity,
});

const getPressure = ({ pressure }) => ({
  symbol: 'atm',
  value: convert.convertInToAtm(pressure),
});

const getWind = ({ speed }) => ({
  symbol: 'km/h',
  value: convert.convertMphToKmh(speed),
});

const getMainData = (atmosphere, wind, { code, temp }) => {
  const { text: title, image } = ptBr.codes[code];
  return {
    humidity: getHumidity(atmosphere),
    image,
    pressure: getPressure(atmosphere),
    temperature: getTemperatureByFahrenheit(temp),
    title,
    wind: getWind(wind),
  };
};

const getDayData = ({ code, day, high }) => {
  const { image } = ptBr.codes[code];
  const parsedDay = ptBr.week[day];
  return {
    day: parsedDay,
    image,
    temperature: getTemperatureByFahrenheit(high),
  };
};

const getDays = ({ forecast }) => {
  const [, tomorrow, afterTomorrow] = forecast;
  return [
    getDayData(tomorrow),
    getDayData(afterTomorrow),
  ];
};

// ---------------------------------------------------

const parser = ({ query }) => {
  const {
    atmosphere,
    item,
    location,
    wind,
  } = query.results.channel;
  return {
    location: getLocation(location),
    today: getMainData(atmosphere, wind, item.condition),
    days: getDays(item),
  };
};


export default parser;
