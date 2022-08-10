import { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherContextProvider({children}){
    const [weather, setWeather] = useState({
        'hoje':{
            'tempAtual':0,
            'min':0,
            'max':0,
            'clima': 'Carregando',
            'vento': {
                'velocidade':'Carregando',
                'deg': 'Carregando'
            },
            'humidade': 'Carregando',
            'pressao': 'Carregando'
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
        setWeather(newWeather);
    }

    return(
        <WeatherContext.Provider value={{weather, updateWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}
