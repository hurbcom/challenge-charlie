import { memo, useCallback, useEffect, useState, Suspense } from 'react';

import './Styles/global.css';
import { AppStyle } from './Styles/app';
import env from 'react-dotenv';
import GoogleService from './Services/google';
import { CardWeather } from './Components/Card';

export const App = memo(() => {
  const [nameLocale, setNameLocale] = useState(null);
  useEffect(() => {
    async function getLocation() {
      if (!('geolocation' in navigator)) {
        return alert('Navegador não compativel com geolocalização');
      }

      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          const {
            data: { results },
          } = await GoogleService.getLocationGoogle(
            latitude,
            longitude,
            env.KEY_API
          );

          setNameLocale(
            `${results[6].address_components[0].long_name}, ${results[6].address_components[1].long_name}`
          );

          console.log('results', results);
        },
        (error) => {
          return alert(`Error: ${error}`);
        }
      );
    }

    getLocation();
  }, []);

  const handleChange = useCallback((value) => {
    if (!!value) setNameLocale(value);
  }, []);

  const handleOnBlur = useCallback(() => {
    if (!!nameLocale) return alert('Por favor informe uma cidade');
  }, [nameLocale]);
  return (
    <>
      <AppStyle>
        <Suspense fallback="Carregando...">
          <CardWeather
            nameLocale={nameLocale}
            handleChange={handleChange}
            handleOnBlur={handleOnBlur}
          />
        </Suspense>
      </AppStyle>
    </>
  );
});
