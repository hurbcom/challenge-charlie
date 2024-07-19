import React, { createContext, useState } from "react";

export type Coordinates = {
  latitude?: number;
  longitude?: number;
};

export type WeatherContextType = {
  coordinates: Coordinates | undefined;
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinates | undefined>>;
  unit: string;
  setUnit: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const WeatherContext = createContext<WeatherContextType | null>(null);

const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coordinates, setCoordinates] = useState<Coordinates>();
  const [unit, setUnit] = useState<string>("metric");
  const [location, setLocation] = useState<string>("");
  return (
    <WeatherContext.Provider
      value={{
        coordinates,
        setCoordinates,
        unit,
        setUnit,
        location,
        setLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
