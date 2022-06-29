import axios from "axios";

const fetchLocation = async (
  latitude: number | undefined,
  longitude: number | undefined
) => {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json",
    {
      params: {
        q: `${latitude}, ${longitude}`,
        key: `${process.env.OPEN_CAGE_KEY}`,
        abbrv: 1,
        language: "pt-br",
        no_annotations: 1,
        roadinfo: 1,
        pretty: 0,
      },
    }
  );
  return response.data.results[0].components;
};

export { fetchLocation };
