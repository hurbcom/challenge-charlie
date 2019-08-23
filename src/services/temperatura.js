export function getTemperature(temp){
    if(temp < 35 && temp > 15){
        return(
            {
                "backgroundColor": "rgba(250, 200, 0, .5)"
            }
        )
    }
    if(temp < 15){
        return(
            {
                "backgroundColor": "rgba(65, 105, 225, .5)"
            }
        )
    }
    return(
        {
            "backgroundColor": "rgba(112, 128, 144,	.6)"
        }
    )
}

export function defineTemperatureColor(temp){
    console.log(temp)
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