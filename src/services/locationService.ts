const openCageUrl =
  "https://api.opencagedata.com/geocode/v1/json?key=0e69ec22195b43bd868e9568f93e69c2&lang=pt_br&limit=1";

export const fetchUserLocation = async (
  latitude: number,
  longitude: number
): Promise<string> => {
  const userLocation = await fetch(`${openCageUrl}&q=${latitude},${longitude}`)
    .then((response) => response.json())
    .then((apiData) => {
      return apiData.results[0].components.city
        ? apiData.results[0].components.city
        : apiData.results[0].components.state;
    })
    .catch((error) => {
      return error;
    });
  return userLocation;
};

export const fetchCoordinatesByLocation = async (
  location: string
): Promise<{ latitude: number; longitude: number }> => {
  const openCageUrl =
    "https://api.opencagedata.com/geocode/v1/json?key=0e69ec22195b43bd868e9568f93e69c2&lang=pt_br&limit=1";

  const userLocation = await fetch(`${openCageUrl}&q=${location}`)
    .then((response) => response.json())
    .then((apiData) => {
      if (apiData.results.length > 0) {
        const locationApi = apiData.results[0].geometry;
        return { latitude: locationApi.lat, longitude: locationApi.lng };
      }
    })
    .catch((error) => {
      return error;
    });
  return userLocation;
};
