import { atom } from "recoil";
import { getBingImage } from "./../services/backgroundImageService";

export const backgroundImage = atom<string | undefined>({
  key: "backgroundImageState",
  default: getBingImage(),
});
