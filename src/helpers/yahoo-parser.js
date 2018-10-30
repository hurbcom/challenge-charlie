import { calcTemperature } from 'helpers';
import ptBr from 'yahoo-translator/PT-BR';


const trim = (str = '') => str.trim();

const getLocation = ({ city, country, region }) => ({
  city,
  country,
  region: trim(region),
});

const getTemperatureByFahrenheit = temp => ({
  C: calcTemperature.convertFahrenheitToCelsius(temp),
  F: temp,
});

const getMainData = ({ code, temp }) => {
  const { text: title, image } = ptBr.codes[code];
  return {
    image,
    temperature: getTemperatureByFahrenheit(temp),
    title,
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
  const { item, location } = query.results.channel;
  return {
    location: getLocation(location),
    today: getMainData(item.condition),
    days: getDays(item),
  };
};


export default parser;
