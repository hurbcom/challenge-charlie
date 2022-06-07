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
  updateNextDayWeather: (
    nextWeather: WeatherForecast,
    newTemperature: number
  ) => void;
  backgroundColor: string;
  setBackgroundColor: (bgColor: string) => void;
  isCelsius: boolean;
  toggleCelsius: (newIsCelsius: boolean) => void;
}

export const useStore = create<State>((set) => ({
  backgroundImageUrl: "",
  setBackgroundImageUrl: (imageUrl: string) => {
    set({ backgroundImageUrl: imageUrl });
  },
  backgroundColor: "#dbd3b4",
  setBackgroundColor: (bgColor: string) => {
    set({ backgroundColor: bgColor });
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
  updateNextDayWeather: (nextDay, newTemperature) =>
    set((state) => ({
      nextDaysWeather: state.nextDaysWeather.map((item) => {
        if (item.id === nextDay.id) {
          return {
            ...item,
            temperature: newTemperature,
          };
        } else {
          return item;
        }
      }),
    })),
  isCelsius: true,
  toggleCelsius: (newIsCelsius) => set({ isCelsius: newIsCelsius }),
}));
