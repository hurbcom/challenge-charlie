import clearSky from '../assets/icons/clear_sky.svg';
import fewClouds from '../assets/icons/few_clouds.svg';
import brokenClouds from '../assets/icons/broken_clouds.svg';
import scatteredClouds from '../assets/icons/scattered_clouds.svg';
import showerRain from '../assets/icons/shower_rain.svg';
import rain from '../assets/icons/rain.svg';
import thunderStorm from '../assets/icons/thunderstorm.svg';
import snow from '../assets/icons/snow.svg';
import mist from '../assets/icons/mist.svg';

const icons = {
    '01d': clearSky,
    '01n': clearSky,
    '02d': fewClouds,
    '02n': fewClouds,
    '04n': brokenClouds,
    '04d': brokenClouds,
    '03d': scatteredClouds,
    '03n': scatteredClouds,
    '09d': showerRain,
    '09n': showerRain,
    '10d': rain,
    '10n': rain,
    '11d': thunderStorm,
    '11n': thunderStorm,
    '13d': snow,
    '13n': snow,
    '50d': mist,
    '50n': mist,
};

export const getIcon = (code) => {
    return icons[code];
};