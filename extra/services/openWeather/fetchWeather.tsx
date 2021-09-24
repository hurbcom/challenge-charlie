import {Dispatch, SetStateAction} from "react";

//Redux
import {AppDispatch} from "./../../redux/store";

//Utils
import {ErrorGeneric} from "../../utils/errorGeneric";

//Constants
import {baseOpenWeatherAPI, keyOpenWeatherAPI} from "../../config/services";

export function FetchWeather (city:string,dispatch:AppDispatch,setWeather:Dispatch<SetStateAction<Array<any>>>,language:string){
    const type = language === 'pt' ? 'metric' : 'imperial'
    fetch(
        baseOpenWeatherAPI
        + city
        + '&lang='
        + language
        + '&units='
        + type
        +'&APPID='
        + keyOpenWeatherAPI
    ).then(res=>res.json())
        .then((data)=>{
            if(data.list.length > 0){
                setWeather(data.list)
            }
            else{
                setWeather([])
            }
        })
        .catch(error=>{
            dispatch(ErrorGeneric(String(error.response.status) + ' - ' + error.response.data))
        })
}