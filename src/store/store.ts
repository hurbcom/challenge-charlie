import create from "zustand";
import { BackgroundImage, Coordinates, Forecast, Location } from "./storeTypes";
import produce from "immer";

type Store = {
  isLoading: boolean;
  setLoading: () => void;
  isError: boolean;
  setError: () => void;
  errorCode: string;
  setErrorCode: (code: string) => void;
  globaltheme: string;
  setGlobalTheme: (temperature: number) => void;
  coords: Coordinates;
  setCoords: (geoPosition: Coordinates) => void;
  location: Location;
  setLocation: (newLocation: Location) => void;
  background: BackgroundImage;
  setBackground: (image: BackgroundImage) => void;
  forecast: Forecast;
  setForecast: (newForecast: Forecast) => void;
  temperatureScale: number;
  setTemperatureScale: () => void;
};

export const useStore = create<Store>((set, get) => ({
  //app state
  isLoading: true,
  setLoading() {
    set(() => ({ isLoading: !get().isLoading }));
  },

  isError: false,
  setError() {
    set(() => ({ isError: !get().isError }));
  },

  errorCode: "00",
  setErrorCode(newCode) {
    set(() => ({ errorCode: newCode }));
  },
  //app appearance
  globaltheme: "gray",
  setGlobalTheme(temperature) {
    set(
      produce((state) => {
        if (temperature < 15) {
          state.globaltheme = "blue";
        } else {
          if (temperature > 35) {
            state.globaltheme = "red";
          } else {
            state.globaltheme = "yellow";
          }
        }
      })
    );
  },

  //coordinates
  coords: {
    latitude: undefined,
    longitude: undefined,
  },
  setCoords(geoposition) {
    set(
      produce((state) => {
        state.coords.latitude = geoposition.latitude;
        state.coords.longitude = geoposition.longitude;
      })
    );
  },

  //location
  location: {
    city: "",
    state: "",
  },
  setLocation(newLocation) {
    set(
      produce((state) => {
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
  forecast: {
    today: {
      temp: 0,
      windDirection: 0,
      weather: {
        icon: "",
        main: "",
      },
    },
    tomorrow: {
      temp: {
        max: 0,
        min: 0,
      },
      weather: {
        icon: "",
        main: "",
      },
    },
    afterTomorrow: {
      temp: {
        max: 0,
        min: 0,
      },
      weather: {
        icon: "",
        main: "",
      },
    },
  },
  setForecast: (newForecast) => set(() => ({ forecast: newForecast })),

  /*To avoid using multiple state variables and setters, the global temperature is defined
  by a single number, that represents the active temperature scale, where:
  0 = Celsius & 1 = Fahrenheit. 2 = Kelvin could also be activated.
  Further temperature scales could also be freely added in the future if needed. */

  temperatureScale: 0,
  setTemperatureScale() {
    set(
      produce((state) => {
        const index = get().temperatureScale;
        if (index == 1) {
          state.temperatureScale = 0;
        } else {
          state.temperatureScale = state.temperatureScale + 1;
        }
      })
    );
  },
}));
