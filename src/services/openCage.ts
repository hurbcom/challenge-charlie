import axios from "axios";

interface Place {
  label: string;
  place: string;
  coords: Number[];
  type: string;
}

const fetchLocationOpenCage = async (location: string) => {
  const { data } = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.NEXT_PUBLIC_OPENCAGE_ACESS_TOKEN}`
  );

  const places = data.results
    .filter((place) => place.components._type === "city")
    .map((place: unknown) => ({
      label: place.formatted,
      place: place.components.city,
      coords: [place.geometry.lat, place.geometry.lng],
    }));

  return places;
};

export default fetchLocationOpenCage;
