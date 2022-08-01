import { createContext, useContext } from "react";

const contextDefaultValues = {
    status: "loading",
    lang: "pt-br",
    error: "",
    location: { city: "", state: "" },
    forecast: [],
    changeLocation: () => {},
    setForecast: () => {},
};
export const AppContext = createContext(contextDefaultValues);

export const useAppContext = () => useContext(AppContext);
