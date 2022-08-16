import axios from "axios";
import { IBingAPIResponse } from "../interfaces/IBingAPIResponse";

export const getBingImage = async (): Promise<string> => {
  const localCache = localStorage.getItem("@challenge-charlie:bgImage");

  if (localCache) {
    const nowDate = new Date();
    const cacheObject = JSON.parse(localCache) as IBingAPIResponse;
    const cacheExpiration = new Date(cacheObject.end_date);

    if (cacheExpiration > nowDate) {
      return cacheObject.url;
    }
  }

  const { data }: { data: IBingAPIResponse } = await axios.get("https://bing.biturl.top/");

  localStorage.setItem("@challenge-charlie:bgImage", JSON.stringify(data));

  return data.url;
};
