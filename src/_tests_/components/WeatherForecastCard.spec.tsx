import { shallow } from 'enzyme';

import WeatherDetails from '../../components/WeatherDetails';

describe('Testing weather Details Section Component', () => {
    const weatherDetailsSection = shallow(
        <WeatherDetails
            label="labelTest"
            content="contentTest"
            value="valueTest"
            altImage="altImageTeste"
            imageSource="urlImage"
        />,
    );

    test('should render correctly', () => {
        expect(weatherDetailsSection);
    });
});
