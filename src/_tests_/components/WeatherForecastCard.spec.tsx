import { shallow } from 'enzyme';

import WeatherForecastCard from '../../components/WeatherForecastCard';

describe('Testing weather Details Section Component', () => {
    const wrapper = shallow(<WeatherForecastCard />);

    test('should render correctly', () => {
        expect(wrapper);
    });
});
