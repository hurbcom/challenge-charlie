export function defineTemperatureColor(temp){
    if(temp < 35 && temp > 15){
        return(
             "yellow"
        )
    }
    if(temp < 15){
        return(
            "blue"
        )
    }
    if(temp > 35){
        return(
            "red"
        )
    }
}