import ptBr from 'yahoo-translator/PT-BR';


const trim = (str = '') => str.trim();

const getLocation = ({ city, country, region }) => ({
  city,
  country,
  region: trim(region),
});

const getMainData = ({ code, day }) => {
  const { text: title, image } = ptBr.codes[code];
  const parsedDay = ptBr.week[day];
  return {
    day: parsedDay,
    image,
    title,
  };
};

const getDays = ({ forecast }) => {
  const [, tomorrow, afterTomorrow] = forecast;
  return [
    getMainData(tomorrow),
    getMainData(afterTomorrow),
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
