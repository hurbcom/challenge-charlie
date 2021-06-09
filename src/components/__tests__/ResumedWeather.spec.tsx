import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ResumedWeather } from '@components/shared/ResumedWeather';
import Color from 'color';

describe('ResumedWeather component', () => {
  it('Should render correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <ResumedWeather
        description="Amanhã"
        temperature={28}
        temperatureUnit="C"
        backgroundColor={Color('#fff')}
        isLoading={false}
        onTemperatureClick={handleClick}
      />,
    );
    fireEvent.click(screen.getByText('°C'));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(getByText('Amanhã')).toBeInTheDocument();
    expect(getByText('28')).toBeInTheDocument();
  });
});
