import create from "zustand";
import { BackgroundImage, Coordinates, Forecast, Location } from "../types";
import produce from "immer";

type Store = {
  loading: boolean;
  coords: Coordinates;
  setCoords: (geoPosition: GeolocationPosition) => void;
  location: Location;
  setLocation: (newLocation: Location) => void;
  background: BackgroundImage;
  setBackground: (image: BackgroundImage) => void;
  forecast: Forecast;
  setForecast: (newForecast: Forecast) => void;
};

export const useStore = create<Store>((set) => ({
  //app state
  loading: false,

  //coordinates
  coords: {
    latitude: undefined,
    longitude: undefined,
  },
  setCoords(geoposition) {
    set(
      produce((state) => {
        state.coords.latitude = geoposition.coords.latitude;
        state.coords.longitude = geoposition.coords.longitude;
      })
    );
  },

  //location
  location: {
    city: "",
    state: "",
    country: "",
  },
  setLocation(newLocation) {
    set(
      produce((state) => {
        state.location.country = newLocation.country;
        state.location.state = newLocation.state;
        if (newLocation.city) {
          state.location.city = newLocation.city;
        } else {
          if (newLocation.municipality) {
            state.location.city = newLocation.municipality;
          } else {
            state.location.city = newLocation.district;
          }
        }
      })
    );
  },

  //background image
  background: {
    url: "",
    altText: "",
  },
  setBackground(image) {
    set(
      produce((state) => {
        state.background.url = image.url;
        state.background.altText = image.altText;
      })
    );
  },

  //weather
  forecast: {},
  setForecast(newForecast) {
    set(
      produce((state) => {
        state.forecast = newForecast;
      })
    );
  },
}));
