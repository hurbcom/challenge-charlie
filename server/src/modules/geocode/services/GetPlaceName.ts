const axios = require("axios").default;

type Request = {
  latitude: number;
  longitude: number;
};

type PlaceName = {
  city: string;
  state: string;
  contry: string;
};

class GetPlaceName {
  public execute({ latitude, longitude }: Request): Promise<PlaceName> {
    return new Promise<PlaceName>((resolve, reject) => {
      try {
        const url = process.env.REACT_APP_OPENCAGE_GEOCODE_URL as string;
        const apiKey = process.env.REACT_APP_OPENCAGE_APIKEY as string;
        const response = (axios
          .get(`${url}?q=${latitude},${longitude}&key=${apiKey}&pretty=1`)
          .then((response) => {
            if (response.status === 200) {
              return {
                city: response.data.results[0].components.city,
                state: response.data.results[0].components.state,
                country: response.data.results[0].components.country,
              };
            } else {
              throw new Error("Error getting PlaceName");
            }
          })) as PlaceName;
        resolve(response);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
}

export default GetPlaceName;
