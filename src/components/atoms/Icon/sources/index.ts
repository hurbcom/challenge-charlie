import Atmosphere from './atmosphere';
import Clouds from './clouds';
import Compass from './compass';
import Drizzle from './drizzle';
import Loading from './loading';
import Rain from './rain';
import Snow from './snow';
import sunClouds from './sunClouds';
import Thunderstorm from './thunderstorm';

export default {
  compass: Compass,
  loading: Loading,
  'sun-clouds': sunClouds,
  Thunderstorm: Thunderstorm,
  Drizzle: Drizzle,
  Rain: Rain,
  Snow: Snow,
  Atmosphere: Atmosphere,
  Clear: sunClouds,
  Clouds: Clouds,
};
