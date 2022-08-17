import { atom } from "recoil";
import { IWeather } from "./../interfaces/IWeather";
import { getBingImage } from "./../services/backgroundImageService";
import { getInitialLocation } from "./../services/geoLocationService";

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
