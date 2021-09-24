import {Dispatch, SetStateAction} from "react";
import {TodayWeatherInterface} from "./todayWeather";
import {ResultTempInterface} from "./resultTemp";

export interface FindWeatherInterface {
    weather:any,
    unitInit:string,
    setToday:Dispatch<SetStateAction<TodayWeatherInterface>>,
    setTomorrow:Dispatch<SetStateAction<ResultTempInterface>>,
    setAfterTomorrow:Dispatch<SetStateAction<ResultTempInterface>>
}