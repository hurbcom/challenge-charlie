// This seems a bit arbitrary, but is a dictionary based on the documentations from open weather and meteocons, for reference:
// https://openweathermap.org/weather-conditions
// https://www.alessioatzeni.com/meteocons/
import React from "react";

const iconDict: Record<string, string> = {
    "01d": "B", //clear sky day
    "02d": "H", //few clouds day
    "03d": "N", //scattered clouds
    "04d": "Y", //broken clouds
    "09d": "R", //shower rain
    "10d": "Q", //rain
    "11d": "0", //thunderstorm
    "13d": "V", //snow (This one will be though to test on Brazil locations :P)
    "50d": "M", //mist
    "01n": "C", //clear sky night
    "02n": "I", //few clouds night
    "03n": "N", //scattered clouds
    "04n": "Y", //broken clouds
    "09n": "R", //shower rain
    "10n": "Q", //rain
    "11n": "0", //thunderstorm
    "13n": "V", //snow
    "50n": "M", //mist
};

export default ({ iconCode }: { iconCode: string }) => {
    return <i data-icon={iconDict[iconCode]}></i>;
};
