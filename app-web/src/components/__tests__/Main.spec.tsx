import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Main from '../Main';

describe('Main component', () => {
    it('should render with a gradient background by default', () => {
        const { container } = render(<Main />);
        expect(container.firstChild).toHaveStyleRule('background', expect.stringContaining('linear-gradient'));
    });

    it('should render with a background image when backgroundimage prop is provided', () => {
        const backgroundImageUrl = 'https://mocked-url-for-testing.com/image.jpg';
        const { container } = render(<Main backgroundimage={backgroundImageUrl} />);
        expect(container.firstChild).toHaveStyleRule('background-image', `url(${backgroundImageUrl})`);
    });
});
