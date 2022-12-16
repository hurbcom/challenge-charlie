import { render } from '@testing-library/react';

import FrontendWeatherForecastFrameworkUi from './frontend-weather-forecast-framework-ui';

describe('FrontendWeatherForecastFrameworkUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendWeatherForecastFrameworkUi />);
    expect(baseElement).toBeTruthy();
  });
});
