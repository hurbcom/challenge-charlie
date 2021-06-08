import { KeyboardEvent } from 'react';

import { TemperatureUnitSwitcherStyled } from './style';

interface ITemperatureUnitSwitcher {
  onClick: (temperatureUnit: string) => void;
  temperatureUnit: string;
}

export const TemperatureUnitSwitcher = ({ onClick, temperatureUnit }: ITemperatureUnitSwitcher) => {
  const onKeyDownTemperatureUnitHandler = (e: KeyboardEvent<HTMLDivElement>, unit: string) => {
    if (e.key === 'Enter') {
      onClick(unit);
    }
  };
  return (
    <TemperatureUnitSwitcherStyled>
      <div
        onClick={() => onClick('C')}
        className={temperatureUnit === 'C' ? 'selected' : ''}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          onKeyDownTemperatureUnitHandler(e, 'C');
        }}
      >
        °C
      </div>
      <div
        onClick={() => onClick('F')}
        className={temperatureUnit === 'F' ? 'selected' : ''}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          onKeyDownTemperatureUnitHandler(e, 'F');
        }}
      >
        °F
      </div>
    </TemperatureUnitSwitcherStyled>
  );
};
