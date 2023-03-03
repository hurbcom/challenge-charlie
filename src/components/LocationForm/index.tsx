import React, { useContext, useState, useCallback, ChangeEvent, useEffect } from 'react';
import debounce from 'lodash.debounce';
import Skeleton from 'react-loading-skeleton';

import formatLocationName from '@utils/formatLocationName';
import { GeoLocationContext } from '@contexts/GeoLocationContext';
import { MeteoconsWebfontEnum } from '@enums/MeteoconsWebfontEnum';
import { getGeoCoordinatesByLocationName } from '@services/getGeoLocationInfo';

import * as S from './styles';
import { WeatherInfoContext } from '@contexts/WeatherInfoContext';
import { WeatherDataInterface } from '@interfaces/WeatherDataInterface';

const LocationForm: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [isInvalidLocationName, setIsInvalidLocationName] = useState<boolean>(false);

  const { geoLocation, setGeoLocation } = useContext(GeoLocationContext);
  const { setWeatherInfo } = useContext(WeatherInfoContext);

  async function handleGetWeatherInfoByLocationName(nextValue: string) {
    console.log('nextValue', nextValue);

    if ((nextValue && nextValue !== '') || nextValue !== undefined) {
      setGeoLocation({ ...geoLocation, loading: true });
      const response = await getGeoCoordinatesByLocationName({ locationName: nextValue });

      console.log('response', response.results);
      // setSearch(`${response}, ${response}`);

      const { locationName } = formatLocationName(response);
      const { geometry } = response.results[0];

      if (response.results && geometry) {
        setGeoLocation({
          loading: false,
          locationName,
          latitude: geometry.lat,
          longitude: geometry.lng
        });

        if (locationName !== undefined && locationName !== '') {
          setSearch(locationName);
        }

        return;
      }
    }

    return setSearch(nextValue);
  }

  const debouncedSave = useCallback(
    debounce((nextValue) => handleGetWeatherInfoByLocationName(nextValue), 2000),
    []
  );

  const handleChangeLocationNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: nextValue } = event.target;
    setSearch(nextValue);
    if (nextValue.length < 3) return;
    debouncedSave(nextValue);

    console.log('search', search);
    setIsInvalidLocationName(false);
  };

  useEffect(() => {
    if (geoLocation.locationName) {
      setSearch(geoLocation.locationName);
    }
  }, [geoLocation]);

  useEffect(() => {
    if (search.length < 3) {
      setWeatherInfo({} as WeatherDataInterface);
      if (search !== '') {
        return setIsInvalidLocationName(true);
      }
    }
    setIsInvalidLocationName(false);
  }, [search]);

  return (
    <S.Container>
      <span className='location-icon rotating' data-icon={MeteoconsWebfontEnum.compass} />
      <form onSubmit={(event) => event.preventDefault()}>
        {geoLocation.loading ? (
          <Skeleton width='70%' height='2rem' />
        ) : (
          <>
            <input
              id='locationName'
              type='search'
              name='locationName'
              value={search}
              minLength={3}
              placeholder={'Informe uma cidade'}
              onChange={(e) => handleChangeLocationNameInput(e)}
            ></input>
            {isInvalidLocationName && (
              <p className='invalid-location-name-message'>Informe no mínimo 3 letras na pesquisa!</p>
            )}
          </>
        )}
      </form>
    </S.Container>
  );
};

export default LocationForm;
