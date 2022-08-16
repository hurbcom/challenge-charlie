import { getCurrentLocation } from "./../services/geoLocationService";
import { atom } from "recoil";
import { getBingImage } from "./../services/backgroundImageService";

export const backgroundImageState = atom<string | undefined>({
  key: "backgroundImageState",
  default: getBingImage(),
});

export const locationState = atom<any>({
  key: "locationState",
  default: getCurrentLocation(),
});
