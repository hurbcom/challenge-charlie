import { render, shallow } from 'enzyme';

import SecondarySectionWeather from '../../components/SecondarySectionWeather';

describe('Testing Secondary Section Weather Component', () => {
    const handleClick = jest.fn();
    const sectionWeather = render(
        <SecondarySectionWeather
            title="test"
            value="1234test"
            iconSource="iconeURL"
            alt="altIcon"
            onClick={handleClick()}
        />,
    );

    test('should render correctly', () => {
        expect(sectionWeather);
    });

    test('should be have a prop onClick', () => {
        expect(sectionWeather.prop('onClick')).toBe(handleClick());
    });

    test('should be call a click function at least once', () => {
        const wrapperButton = shallow(
            <SecondarySectionWeather onClick={handleClick()} />,
        );
        wrapperButton.simulate('click');
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
