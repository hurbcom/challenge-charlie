import create, { State } from "zustand";
import { Coordinates } from "../types";

type Store = {
  coordinates: Coordinates;
  setCoordinates: (c: Coordinates) => void;
};

const useStore = create<Store>((set) => ({
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
  setCoordinates: (c: Coordinates) => set({ coordinates: c }),
}));

export default useStore;
