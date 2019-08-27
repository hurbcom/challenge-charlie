
export const getWindDirection = (degree) => {
        const val = Math.floor((degree / 22.5) + 0.5);
        const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO"];
        return arr[(val % 16)];
}

export const getWindSpeedInKilometers = (speed) => {
    const val = Math.floor(speed * 3.6);
    return val;
}

export const getTempColor = (temp) => {
    switch(temp){
        case (temp > 35): 
            return "red-background";
        case (temp < 15):
            return "blue-background";
        default:
            return "yellow-background";
    }
}


export const getWeatherIcon = (weatherCode) => {
    console.log(weatherCode);
    switch(weatherCode){
        case 800: 
            return "B";
        case 801: case 802: case 803: case 804:
            return "H";
        case 501: case 502: case 503: case 504: case 511: case 520: case 521: case 522: case 531:
            return "R";
        case 301: case 302: case 310: case 311: case 312: case 314: case 321:
            return "Q"; 
        default:
            return "B";
    }
} 