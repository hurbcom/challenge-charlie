import { shallow } from 'enzyme';

import WeatherForecastCard from '../../components/WeatherForecastCard';
import { getImageOfTheDay } from '../../services/BackgroundImageService';
import {
    getLocationFromCoordinates,
    URL_GEOLOCATION,
} from '../../services/GeolocationService';

describe('Testing weather Details Section Component', () => {
    const wrapper = shallow(<WeatherForecastCard />);

    test('should render correctly', () => {
        expect(wrapper);
    });
});
