import axios from "axios";

interface City {
  label: string;
  name: string;
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface ReverseGeocodingProps {
  latitude: number;
  longitude: number;
}

const ReverseGeocoding = async ({
  latitude,
  longitude,
}: ReverseGeocodingProps) => {
  const { data } = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_ACESS_TOKEN}`
  );

  const city = data.results.map((city: any) => ({
    label: `${city.components.city}, ${city.components.state}`,
    name: city.components.city,
    coords: {
      latitude: city.geometry.lat,
      longitude: city.geometry.lng,
    },
  }));

  return city;
};

export default ReverseGeocoding;
