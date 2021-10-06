import React from 'react';
import { render } from '@testing-library/react';
import WeatherBox from '.';

describe('<WeatherBox />', () => {
    it('should be rendered', () => {
        const { container } = render(<WeatherBox />);

        expect(container.firstChild).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });
});
