import { UserLocation } from "interfaces/UserLocation";
import { Weather, WeatherForecast } from "interfaces/Weather";
import create from "zustand";

interface State {
  //general state
  backgroundImageUrl: string;
  setBackgroundImageUrl: (imageUrl: string) => void;
  userLocation: UserLocation;
  setUserLocation: (userLocation: UserLocation) => void;
  backgroundColor: string;
  setBackgroundColor: (bgColor: string) => void;
  isCelsius: boolean;
  toggleCelsius: (newIsCelsius: boolean) => void;
  isLoading: boolean;
  setIsLoading: (newIsLoading: boolean) => void;
  //weather
  locationWeather: Weather;
  setLocationWeather: (weather: Weather) => void;
  nextDaysWeather: WeatherForecast[];
  addNextDayWeather: (nextWeather: WeatherForecast) => void;
  updateNextDayWeather: (
    nextWeather: WeatherForecast,
    newTemperature: number
  ) => void;
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
  isCelsius: true,
  toggleCelsius: (newIsCelsius) => set({ isCelsius: newIsCelsius }),
  isLoading: false,
  setIsLoading: (newIsLoading) => set({ isLoading: newIsLoading }),
  userLocation: {} as UserLocation,
  setUserLocation: (newUserLocation: UserLocation) => {
    set({ userLocation: newUserLocation });
  },

  locationWeather: {} as Weather,
  setLocationWeather: (weather: Weather) => {
    set({ locationWeather: weather });
  },
  nextDaysWeather: [],
  addNextDayWeather: (temperature: WeatherForecast) => {
    set((prevState) => ({
      nextDaysWeather:
        prevState.nextDaysWeather.length == 2
          ? [temperature]
          : [...prevState.nextDaysWeather, temperature],
    }));
  },
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
}));
