import { Input } from '../Input';
import {
  CardWrapper,
  WeaterContainer,
  WeaterContent,
  Icon,
  Informations,
  Details,
  After,
  Footer,
} from './style';
import { TiWeatherSunny } from 'react-icons/ti';
import colors from '../../Styles/colors';
import { useCallback, useState } from 'react';

function convertValues(value, type, mode) {
  switch (type) {
    case 'temp':
      const temp = Math.floor(value) / 10;
      const newTemp = String(temp).split('.');

      if (mode === 'CF') {
        const valueTemp = 1.8 * newTemp[0] + 32;
        return `${valueTemp}ºF`;
      }
      break;
    case 'wind':
      return `NO ${value}km/h`;
    case 'humidity':
      return `${value}%`;
    case 'pressure':
      return `NO ${value}hPA`;
    default:
      break;
  }
}

export const CardWeather = ({
  nameLocale,
  handleChange,
  handleOnBlur,
  weather,
  mode,
}) => {
  const [converter, setConverter] = useState(null);
  const [newMode, setNewMode] = useState(null);

  const handleConverterWeather = useCallback(async (value, type) => {
    await setNewMode(type);

    const temp = Math.floor(value) / 10;
    const newTemp = String(temp).split('.');

    if (type === 'CF') {
      const valueTemp = 1.8 * newTemp[0] + 32;
      await setConverter(`${valueTemp}ºF`);
    } else {
      const valueTemp = 1.8 * newTemp[0] + 32;
      const newInfo = Math.floor(((valueTemp - 32) * 5) / 9);
      await setConverter(`${newInfo}ºC`);
    }
  }, []);

  return (
    <CardWrapper>
      <Input
        placeholder="Search city"
        value={nameLocale}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={handleOnBlur}
      />
      <WeaterContainer>
        <WeaterContent>
          <Icon>
            {newMode === 'FC' ? (
              <TiWeatherSunny
                size={250}
                color={colors.white}
                onClick={() => handleConverterWeather(weather.main.temp, 'CF')}
              />
            ) : (
              newMode === 'CF' && (
                <TiWeatherSunny
                  size={250}
                  color={colors.white}
                  onClick={() =>
                    handleConverterWeather(weather.main.temp, 'FC')
                  }
                />
              )
            )}

            {!newMode && (
              <TiWeatherSunny
                size={250}
                color={colors.white}
                onClick={() => handleConverterWeather(weather.main.temp, 'FC')}
              />
            )}
          </Icon>

          <Informations>
            <Details>
              <div>
                <h2>Hoje</h2>
                <span>
                  {!converter
                    ? convertValues(weather.main.temp, 'temp', mode)
                    : converter}
                </span>
              </div>

              <div>
                <h2>Ensolarado</h2>
              </div>

              <div>
                <span>Vento:</span>{' '}
                <strong>{convertValues(weather.wind.speed, 'wind')}</strong>
                <br />
                <span>Humidade:</span>{' '}
                <strong>
                  {convertValues(weather.main.humidity, 'humidity')}
                </strong>
                <br />
                <span>Pressão:</span>{' '}
                <strong>
                  {convertValues(weather.main.pressure, 'pressure')}
                </strong>
              </div>
            </Details>
          </Informations>
        </WeaterContent>
        <Footer className="footer-card">
          <After>
            <h2>AMANHÃ</h2>
            <span>
              {!converter
                ? convertValues(weather.main.temp, 'temp', mode)
                : converter}
            </span>
          </After>
          <After>
            <h2>DEPOIS DE AMANHÃ</h2>
            <span>
              {!converter
                ? convertValues(weather.main.temp, 'temp', mode)
                : converter}
            </span>
          </After>
        </Footer>
      </WeaterContainer>
    </CardWrapper>
  );
};
