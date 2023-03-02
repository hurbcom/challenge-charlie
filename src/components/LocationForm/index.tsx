import React, { useContext, useState, useCallback, ChangeEvent, useEffect } from 'react';
import debounce from 'lodash.debounce';

import formatLocationName from '@utils/formatLocationName';
import { GeoLocationContext } from '@contexts/GeoLocationContext';
import { MeteoconsWebfontEnum } from '@enums/MeteoconsWebfontEnum';
import { getGeoCoordinatesByLocationName } from '@services/getGeoLocationInfo';

import * as S from './styles';

const LocationForm: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const { geoLocation, setGeoLocation } = useContext(GeoLocationContext);

  async function handleGetWeatherInfoByLocationName(nextValue: string) {
    console.log(`nextValue`, nextValue);

    if (nextValue !== '' || nextValue !== undefined) {
      setGeoLocation({ ...geoLocation, loading: true });
      const response = await getGeoCoordinatesByLocationName({ locationName: nextValue });

      console.log(`response`, response.results);
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
      }
    }

    setSearch(nextValue);
  }

  const debouncedSave = useCallback(
    debounce((nextValue) => handleGetWeatherInfoByLocationName(nextValue), 1000),
    []
  );

  const handleChangeLocationNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: nextValue } = event.target;
    setSearch(nextValue);
    debouncedSave(nextValue);
  };

  useEffect(() => {
    if (geoLocation.locationName) {
      setSearch(geoLocation.locationName);
    }
  }, [geoLocation]);

  return (
    <S.Container>
      <form onSubmit={(event) => event.preventDefault()}>
        <span className='location-icon' data-icon={MeteoconsWebfontEnum.compass} />
        <input
          id='location'
          type='search'
          name='location-name'
          value={search}
          placeholder={'Informe uma cidade'}
          onChange={(e) => handleChangeLocationNameInput(e)}
        ></input>
      </form>
    </S.Container>
  );
};

export default LocationForm;
