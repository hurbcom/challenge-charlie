import { UserLocation } from "interfaces/UserLocation";
import { Weather, WeatherForecast } from "interfaces/Weather";
import create from "zustand";

interface State {
  backgroundImageUrl: string;
  setBackgroundImageUrl: (imageUrl: string) => void;
  userLocation: UserLocation;
  setUserLocation: (userLocation: UserLocation) => void;
  locationWeather: Weather;
  setLocationWeather: (weather: Weather) => void;
  nextDaysWeather: WeatherForecast[];
  addNextDayWeather: (nextWeather: WeatherForecast) => void;
}

export const useStore = create<State>((set) => ({
  backgroundImageUrl: "",
  setBackgroundImageUrl: (imageUrl: string) => {
    set({ backgroundImageUrl: imageUrl });
  },
  userLocation: {} as UserLocation,
  setUserLocation: (newUserLocation: UserLocation) => {
    set({ userLocation: newUserLocation });
  },
  locationWeather: {} as Weather,
  setLocationWeather: (weather: Weather) => {
    set({ locationWeather: weather });
  },
  nextDaysWeather: [],

  addNextDayWeather: (temperature: WeatherForecast) =>
    set((prevState) => ({
      nextDaysWeather: [...prevState.nextDaysWeather, temperature],
    })),
}));
