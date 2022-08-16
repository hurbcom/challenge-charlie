import axios from "axios";
import { IBingAPIResponse } from "../interfaces/IBingAPIResponse";

export const getBingImage = async (): Promise<string> => {
  const localCache = localStorage.getItem("@challenge-charlie:bgImage");

  if (localCache) {
    const nowDate = new Date();
    const cacheObject = JSON.parse(localCache) as IBingAPIResponse;
    const cacheExpirationString = cacheObject.end_date;
    const cacheExpirationYear = +cacheExpirationString.slice(0, 4);
    const cacheExpirationMonth = +cacheExpirationString.slice(4, 6);
    const cacheExpirationDay = +cacheExpirationString.slice(6, 8);

    const cacheExpiration = new Date(cacheExpirationYear, cacheExpirationMonth - 1, cacheExpirationDay, 0, 0, 0, 0);

    if (cacheExpiration > nowDate) {
      return cacheObject.url;
    }
  }

  const { data }: { data: IBingAPIResponse } = await axios.get("https://bing.biturl.top/");

  localStorage.setItem("@challenge-charlie:bgImage", JSON.stringify(data));

  return data.url;
};
