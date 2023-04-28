export const POSITIONS_TO_OPACITIES: Record<number, string> = {
    0: "--max-bg-opacity",
    1: "--medium-bg-opacity",
    2: "--min-bg-opacity",
};

export const SIZE: Record<string, string> = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

export const DEVICES: Record<string, string> = {
    mobileS: `(min-width: ${SIZE.mobileS})`,
    mobileM: `(min-width: ${SIZE.mobileM})`,
    mobileL: `(min-width: ${SIZE.mobileL})`,
    tablet: `(min-width: ${SIZE.tablet})`,
    laptop: `(min-width: ${SIZE.laptop})`,
    laptopL: `(min-width: ${SIZE.laptopL})`,
    desktop: `(min-width: ${SIZE.desktop})`,
    desktopL: `(min-width: ${SIZE.desktop})`,
};

// This seems a bit arbitrary, but is a dictionary based on the documentations from open weather and meteocons, for reference:
// https://openweathermap.org/weather-conditions
// https://www.alessioatzeni.com/meteocons/
export const CODES_TO_ICONS: Record<string, string> = {
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

export const BING_BASE_URL = "https://www.bing.com";
