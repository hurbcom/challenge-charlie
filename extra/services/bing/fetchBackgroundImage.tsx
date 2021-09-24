import {Dispatch, SetStateAction} from "react";

//Redux
import {AppDispatch} from "./../../redux/store";

//Utils
import {ErrorGeneric} from "../../utils/errorGeneric";

//Constants
import {backgroundBingAPI, baseBingAPI} from "../../config/services";

//I18N
import intl from "react-intl-universal";

export function FetchBackgroundImage (language:string,dispatch:AppDispatch,setImg:Dispatch<SetStateAction<string>>){
    fetch(
        baseBingAPI
        + backgroundBingAPI
        + language
    )
        .then(res => res.json())
        .then(data => {
            setImg('https://www.bing.com/' + data.images[0].url + '.png')
        })
        .catch((error)=>{
            dispatch(ErrorGeneric(intl.get('messageError')))
        })
}

