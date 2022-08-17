import { IWeather } from "./../interfaces/IWeather";
import { getInitialLocation } from "./../services/geoLocationService";
import { atom } from "recoil";
import { getBingImage } from "./../services/backgroundImageService";

export const backgroundImageState = atom<string | undefined>({
  key: "backgroundImageState",
  default: getBingImage(),
});

export const locationState = atom<string>({
  key: "locationState",
  default: getInitialLocation(),
});

export const weatherState = atom<IWeather | undefined>({
  key: "weatherState",
  default: undefined,
});
