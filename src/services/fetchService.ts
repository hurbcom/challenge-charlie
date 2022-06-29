import axios from "axios";

export const fetchLocation = async (
  latitude: number | undefined,
  longitude: number | undefined
) => {
  const response = await axios.get(process.env.OPEN_CAGE_BASEURL ?? "", {
    params: {
      q: `${latitude}, ${longitude}`,
      key: `${process.env.OPEN_CAGE_KEY}`,
      abbrv: 1,
      language: "pt-br",
      no_annotations: 1,
      roadinfo: 1,
      pretty: 0,
    },
  });
  return response.data.results[0].components;
};

export const fetchBackground = async () => {
  const response = await axios.get(
    `${process.env.REVERSE_PROXY}https://www.bing.com/HPImageArchive.aspx`,
    {
      params: {
        format: "js",
        idx: 0,
        n: 1,
        mkt: "pt-br",
      },
    }
  );
  return response.data.images[0];
};
