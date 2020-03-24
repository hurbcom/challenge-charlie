import Clear from '../../assets/meteocons-icons/SVG/clear.svg';
import ThunderTempest from '../../assets/meteocons-icons/SVG/thunderTempest.svg';
import Snow from '../../assets/meteocons-icons/SVG/snow.svg';
import Rain from '../../assets/meteocons-icons/SVG/rain.svg';
import Drizzle from '../../assets/meteocons-icons/SVG/drizzle.svg';
import Clouds from '../../assets/meteocons-icons/SVG/clouds.svg';

const weathers = [
    { name: 'Clear', icon: Clear },
    { name: 'Rain', icon: Rain },
    { name: 'Snow', icon: Snow },
    { name: 'Drizzle', icon: Drizzle },
    { name: 'Clouds', icon: Clouds },
    { name: 'ThunderTempest', icon: ThunderTempest }
];

export default function getIcon(IconName) {
    const weatherIconOfLocation = weathers.find(
        element => element.name === IconName
    );
    return weatherIconOfLocation;
}
