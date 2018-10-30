import ptBr from 'yahoo-translator/PT-BR';


const trim = (str = '') => str.trim();

const getLocation = ({ city, country, region }) => ({
  city,
  country,
  region: trim(region),
});

const getMainData = ({ condition }) => {
  const { code } = condition;
  const { text: title, image } = ptBr.codes[code];
  return {
    title,
    image,
  };
};

// ---------------------------------------------------

const parser = ({ query }) => {
  const { item, location } = query.results.channel;
  return {
    location: getLocation(location),
    today: getMainData(item),
  };
};


export default parser;
