export const getWeatherIcon = (weatherCode:number) => {
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