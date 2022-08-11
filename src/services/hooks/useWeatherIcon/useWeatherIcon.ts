import broken_clouds from '../../../assets/svg/broken_clouds.svg';
import clear_sky from '../../../assets/svg/clear_sky.svg';
import few_clouds from '../../../assets/svg/few_clouds.svg';
import mist from '../../../assets/svg/mist.svg';
import rain from '../../../assets/svg/rain.svg';
import scattered_clouds from '../../../assets/svg/scattered_clouds.svg';
import shower_rain from '../../../assets/svg/shower_rain.svg';
import snow from '../../../assets/svg/snow.svg';
import thunderstorm from '../../../assets/svg/thunderstorm.svg';

const images: { [name: string]: string } = {
  '01d': clear_sky,
  '01n': clear_sky,
  '02d': few_clouds,
  '02n': few_clouds,
  '04n': broken_clouds,
  '04d': broken_clouds,
  '03d': scattered_clouds,
  '03n': scattered_clouds,
  '09d': shower_rain,
  '09n': shower_rain,
  '10d': rain,
  '10n': rain,
  '11d': thunderstorm,
  '11n': thunderstorm,
  '13d': snow,
  '13n': snow,
  '50d': mist,
  '50n': mist,
};

export function useWeatherIcon(icon: string) {
  return images[icon];
}
