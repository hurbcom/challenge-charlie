import { FormattedLocation } from "interfaces/FormattedLocation";

const openCageUrl =
  "https://api.opencagedata.com/geocode/v1/json?key=c63386b4f77e46de817bdf94f552cddf&lang=pt_br&limit=1";

export const fetchUserLocation = async (
  latitude: number,
  longitude: number
): Promise<FormattedLocation> => {
  const userLocation = await fetch(`${openCageUrl}&q=${latitude},${longitude}`)
    .then((response) => response.json())
    .then((apiData) => {
      const location = apiData.results[0].components;
      const formattedLocation: FormattedLocation = {
        city: location.city,
        state: location.state,
        country: location.country,
      };
      return formattedLocation;
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
    "https://api.opencagedata.com/geocode/v1/json?key=c63386b4f77e46de817bdf94f552cddf&lang=pt_br&limit=1";

  const userLocation = await fetch(`${openCageUrl}&q=${location}`)
    .then((response) => response.json())
    .then((apiData) => {
      const locationApi = apiData.results[0].geometry;
      return { latitude: locationApi.lat, longitude: locationApi.lng };
    })
    .catch((error) => {
      return error;
    });
  return userLocation;
};
