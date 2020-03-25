import Clear from '../../assets/meteocons-icons/SVG/clear.svg';
import Thunderstorm from '../../assets/meteocons-icons/SVG/thunderTempest.svg';
import Snow from '../../assets/meteocons-icons/SVG/snow.svg';
import Rain from '../../assets/meteocons-icons/SVG/rain.svg';
import Drizzle from '../../assets/meteocons-icons/SVG/drizzle.svg';
import Clouds from '../../assets/meteocons-icons/SVG/clouds.svg';

const weathers = [
    { name: 'Ensolarado', icon: Clear },
    { name: 'Chuvoso', icon: Rain },
    { name: 'Nevando', icon: Snow },
    { name: 'Chuviscando', icon: Drizzle },
    { name: 'Nublado', icon: Clouds },
    { name: 'Tesmpestade', icon: Thunderstorm }
];

export default function getIcon(IconName) {
    const weatherIconOfLocation = weathers.find(
        element => element.name === IconName
    );
    if (weatherIconOfLocation) return weatherIconOfLocation.icon;
    return null;
}
