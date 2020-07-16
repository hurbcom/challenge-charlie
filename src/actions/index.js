import bing from "../apis/bing";
import {
  FETCH_BACKGROUND
} from "./types";

export const fetchBackground = () => async dispatch => {
  const { data } = await bing.get("/");
  const { images } = data;
  const [backgroundImage] = images;
  const backgroundUrl = `https://www.bing.com${backgroundImage.url}`;

	dispatch({ type: FETCH_BACKGROUND, payload: backgroundUrl });
};