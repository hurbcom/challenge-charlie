import { createContext, useContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherContextProvider({children}){
    const [weather, setWeather] = useState({
        'hoje':{
            'tempAtual':0,
            'min':0,
            'max':0
        },
        'amanha':{
            'med':0,
            'min':0,
            'max':0
        },
        'depAmanha': {
            'med':0,
            'min':0,
            'max':0
        }
    });

    function updateWeather(newWeather){
        console.log(newWeather);
        setWeather(newWeather);
    }

    return(
        <WeatherContext.Provider value={{weather, updateWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}
