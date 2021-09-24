import {blueColor, redColor, yellowColor} from "../config/colors";

//Interface
import {ResultTempInterface} from "../interfaces/resultTemp";

export const getTempColor = (value: ResultTempInterface) => {
    if(value.unit === 'c' ? value.temp > 35 : value.temp > 95){
        return redColor
    }
    else if (value.unit === 'c' ? value.temp < 15 : value.temp < 59){
        return blueColor
    }
    else{
        return yellowColor
    }
}