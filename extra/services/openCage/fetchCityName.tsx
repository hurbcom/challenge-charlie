import {Dispatch, SetStateAction} from "react";

//Redux
import {AppDispatch} from "./../../redux/store";

//Utils
import {ErrorGeneric} from "../../utils/errorGeneric";

//Constants
import {baseOpenCageAPI, keyOpenCageAPI} from "../../config/services";

export function FetchCityName (latitude:number,longitude:number,language:string,dispatch:AppDispatch,setCity:Dispatch<SetStateAction<string>>){
    fetch(
        baseOpenCageAPI
        + latitude
        + ','
        + longitude
        + '&key='
        + keyOpenCageAPI
        + '&language='
        + language
    ).then(res=>res.json())
        .then((data)=>{
            const value = String(data.results[0].components.city + ', ' + data.results[0].components.state)
            setCity(value)
        })
        .catch(error=>{
            dispatch(ErrorGeneric(String(error.response.status) + ' - ' + error.response.data))
        })
}