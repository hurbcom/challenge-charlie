import {Dispatch, SetStateAction} from "react";

//Interface
import {ResultTempInterface} from "../interfaces/resultTemp";

export function ChangeTemp(value:ResultTempInterface,setValue:Dispatch<SetStateAction<ResultTempInterface>>){
    if(value.unit === 'c'){
        setValue({
            ...value,
            temp: value.temp * 1.8 + 32,
            unit: 'f'
        })
    }
    else{
        setValue({
            ...value,
            temp: (value.temp - 32)/1.8,
            unit: 'c'
        })
    }
}