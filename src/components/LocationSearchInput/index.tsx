import React, { useContext, useState, useCallback, ChangeEvent, useEffect, FormEvent } from 'react';
import debounce from 'lodash.debounce';
import { FaSearch } from 'react-icons/fa';

import formatLocationName from '@utils/formatLocationName';
import { GeoLocationContext } from '@contexts/GeoLocationContext';
import { MeteoconsWebfontEnum } from '@enums/MeteoconsWebfontEnum';
import { WeatherInfoContext } from '@contexts/WeatherInfoContext';
import { ProgressBarStatusEnum } from '@enums/ProgressBarStatusEnum';
import { WeatherDataInterface } from '@interfaces/WeatherDataInterface';
import { getGeoCoordinatesByLocationName } from '@services/getGeoLocationInfo';
import { ProgressionBar } from '@components/LocationSearchInput/components/ProgressionBar';

import * as S from './styles';

const LocationSearchInput: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [isInvalidLocationName, setIsInvalidLocationName] = useState<boolean>(false);
  const [isBackspacePressed, setIsBackspacePressed] = useState<boolean>(false);
  const [isShown, setIsShown] = useState(false);
  const [isLocationNotFound, setIsLocationNotFound] = useState<boolean>(false);
  const [progression, setProgression] = useState<ProgressBarStatusEnum>(ProgressBarStatusEnum.default);

  const { geoLocation, setGeoLocation } = useContext(GeoLocationContext);
  const { weatherInfo, setWeatherInfo } = useContext(WeatherInfoContext);

  async function handleGetWeatherInfoByLocationName(nextValue: string) {
    if ((nextValue && nextValue !== '') || nextValue !== undefined) {
      setProgression(ProgressBarStatusEnum.beginning);
      setGeoLocation({ ...geoLocation, loading: true });
      const response = await getGeoCoordinatesByLocationName({ locationName: nextValue });
      setProgression(ProgressBarStatusEnum.middle);

      console.log('chegou aqui com backspace');

      console.log('!response.results', !response.results.length);
      if (!response.results.length) {
        setIsLocationNotFound(true);
        return setProgression(ProgressBarStatusEnum.default);
      }

      const { locationName } = formatLocationName(response);
      const { geometry } = response.results[0];

      if (response.results && geometry) {
        setGeoLocation({
          loading: false,
          locationName,
          latitude: geometry.lat,
          longitude: geometry.lng
        });
        setProgression(ProgressBarStatusEnum.end);
        if (locationName !== undefined && locationName !== '') {
          setSearch(locationName);
        }
        return;
      }
    }
  }

  const debouncedSave = useCallback(
    debounce((nextValue: string) => handleGetWeatherInfoByLocationName(nextValue), 2000),
    []
  );

  const handleChangeLocationNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (isLocationNotFound) {
      setIsLocationNotFound(false);
    }

    const { value: nextValue } = event.target;
    setSearch(nextValue);

    if (nextValue.length <= 2) {
      return setIsInvalidLocationName(true);
    }

    if (isBackspacePressed) {
      return setIsBackspacePressed(false);
    }

    setIsBackspacePressed(false);
    setIsInvalidLocationName(false);
    return debouncedSave(nextValue);
  };

  useEffect(() => {
    if (geoLocation.locationName) {
      setSearch(geoLocation.locationName);
    }
  }, [geoLocation]);

  useEffect(() => {
    if (search.length <= 2) {
      setWeatherInfo({} as WeatherDataInterface);
      if (search !== '') {
        return setIsInvalidLocationName(true);
      }
    }

    setIsInvalidLocationName(false);
  }, [search]);

  useEffect(() => {
    if (isLocationNotFound) {
      setWeatherInfo({} as WeatherDataInterface);
    }
  }, [isLocationNotFound]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Backspace') {
      setIsBackspacePressed(true);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (search.length <= 2) {
      return setIsInvalidLocationName(true);
    }

    setIsInvalidLocationName(false);
    return handleGetWeatherInfoByLocationName(search);
  };

  return (
    <>
      <S.Container onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <></>
        <span className='location-icon rotating' data-icon={MeteoconsWebfontEnum.compass} />
        <form onSubmit={(event) => handleSubmit(event)}>
          <>
            <div className='input-wrapper'>
              <input
                id='locationName'
                type='search'
                name='locationName'
                value={search}
                minLength={3}
                placeholder={'Informe uma cidade'}
                onChange={(e) => handleChangeLocationNameInput(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              ></input>
              {isShown && (
                <button onClick={() => handleGetWeatherInfoByLocationName(search)} className='search-icon-wrapper'>
                  <FaSearch size={16} />
                </button>
              )}
            </div>
            {isInvalidLocationName && (
              <p className='invalid-location-name-message'>Informe no mínimo 3 letras na pesquisa!</p>
            )}
            {isLocationNotFound && (
              <p className='invalid-location-name-message'>Essa localização não foi encontrada!</p>
            )}
          </>
        </form>
      </S.Container>
      {(geoLocation.loading || weatherInfo.loading) && <ProgressionBar progressBarStatus={progression} />}
    </>
  );
};

export default LocationSearchInput;
