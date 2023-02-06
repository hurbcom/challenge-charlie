import { FunctionComponent } from 'react';

/**
 * Icons reference: https://www.alessioatzeni.com/meteocons/
 * Generated: icomoon.io
 */

// Day icon
import ClearSkyDayIcon from '../assets/icons/clear-sky-day.svg';
import FewCloudsDayIcon from '../assets/icons/few-clouds-day.svg';
import RainDayIcon from '../assets/icons/rain-day.svg';

// Night icon
import ClearSkyNightIcon from '../assets/icons/clear-sky-night.svg';
import FewCloudsNightIcon from '../assets/icons/few-clouds-night.svg';
import RainNightIcon from '../assets/icons/rain-night.svg';

// Day and night icon
import ScatteredCloudsIcon from '../assets/icons/scattered-clouds.svg';
import BrokenCloudsIcon from '../assets/icons/broken-clouds.svg';
import ShowerRainIcon from '../assets/icons/shower-rain.svg';
import ThunderstormIcon from '../assets/icons/thunderstorm.svg';
import SnowIcon from '../assets/icons/snow.svg';
import MistIcon from '../assets/icons/mist.svg';

const iconsMap: Record<string, FunctionComponent> = {
  '01d': ClearSkyDayIcon,
  '01n': ClearSkyNightIcon,
  '02d': FewCloudsDayIcon,
  '02n': FewCloudsNightIcon,
  '03d': ScatteredCloudsIcon,
  '03n': ScatteredCloudsIcon,
  '04d': BrokenCloudsIcon,
  '04n': BrokenCloudsIcon,
  '09d': ShowerRainIcon,
  '09n': ShowerRainIcon,
  '10d': RainDayIcon,
  '10n': RainNightIcon,
  '11d': ThunderstormIcon,
  '11n': ThunderstormIcon,
  '13d': SnowIcon,
  '13n': SnowIcon,
  '50d': MistIcon,
  '50n': MistIcon,
};

export const getIconById = (id: string) => {
  return iconsMap[id];
};
