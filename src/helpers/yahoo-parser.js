const parser = ({ query }) => {
  const { location } = query.results.channel;
  return {
    location: `${location.city} - ${location.city}`,
  };
};


export default parser;
