import services from 'services';

const getGeolocalization = async (latitude: number, longitude: number) => {
  try {
    const { data } = await services.client.get('https://api.opencagedata.com/geocode/v1/json', {
      params: {
        q: `${latitude}, ${longitude}`,
        key: 'c63386b4f77e46de817bdf94f552cddf', // to do
        language: 'pt-br',
        noAnnotations: 1,
        roadinfo: 1,
        pretty: 0,
        abbrv: 1,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
};

export default getGeolocalization;
