import axios from "axios";

interface City {
  label: string;
  name: string;
  coords: {
    latitude: number;
    longitude: number;
  };
}

const ForwardGeocoding = async (location: string): Promise<City[]> => {
  const { data } = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.NEXT_PUBLIC_OPENCAGE_ACESS_TOKEN}`
  );

  const cities = data.results
    .filter((city) => city.components._type === "city")
    .map((city: any) => ({
      label: `${city.components.city}, ${city.components.state}`,
      name: city.components.city,
      coords: {
        latitude: city.geometry.lat,
        longitude: city.geometry.lng,
      },
    }));

  return cities;
};

export default ForwardGeocoding;
