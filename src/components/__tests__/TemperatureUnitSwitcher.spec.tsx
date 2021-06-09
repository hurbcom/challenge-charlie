import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TemperatureUnitSwitcher } from '@components/shared/TemperatureUnitSwitcher';

describe('TemperatureUnitSwitcher component', () => {
  it('Should render correctly', () => {
    const handleClick = jest.fn();
    render(<TemperatureUnitSwitcher temperatureUnit="C" onClick={handleClick} />);
    fireEvent.click(screen.getByText('°C'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
