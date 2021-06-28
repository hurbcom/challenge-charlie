import React, {
  ChangeEvent, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';

import useDebounce from '@hooks/useDebounce';

import Input from '@components/Input';
import { WeatherContext } from '@contexts/Weather';

type Search = {
  searched: string,
  pretty: string,
}

const CitiesInput: React.FC = () => {
  const [value, setValue] = useState('');
  const [
    lastSearch,
    setLastSearch,
  ] = useState<Search>({} as Search);

  const {
    fetchWeatherByLocation,
    isFetching,
    weatherData,
    status,
  } = useContext(WeatherContext);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value || '');
  }, []);

  const fetchJustWhenUserWritten = useCallback(() => {
    const pretty = `${weatherData.city}, ${weatherData.state}`;

    if (
      lastSearch?.searched !== value
      && value !== pretty
      && value !== ''
    ) {
      fetchWeatherByLocation({
        cityName: value,
      });
    }
  }, [
    fetchWeatherByLocation,
    lastSearch,
    value,
    weatherData,
  ]);

  useDebounce(
    fetchJustWhenUserWritten,
    value,
    1000,
  );

  useEffect(() => {
    let pretty = '';

    if (weatherData?.city && weatherData.state) {
      pretty = `${weatherData.city}, ${weatherData.state}`;
    } else if (weatherData?.city) {
      pretty = weatherData.city;
    } else if (weatherData?.city) {
      pretty = weatherData.state;
    } else if (!isFetching) {
      pretty = value;
    }

    if (!isFetching) {
      setValue(pretty);
      setLastSearch({
        searched: value,
        pretty,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherData, isFetching]);

  const spanClasses = useMemo(() => {
    let classes = '';

    classes += status.type === 'Error' ? '--danger' : '';
    classes += status.type === 'Normal' && status.message === ''
      ? '--hideden'
      : '';

    return classes;
  }, [status]);

  return (
    <div className="cities-input">
      <i className={`icon ${isFetching ? 'loading' : ''}`} data-icon="(" />

      <Input
        type="text"
        className="input"
        value={value}
        onChange={onChange}
      />

      <span className={`status ${spanClasses}`}>
        {status.message}
      </span>
    </div>
  );
};

export default CitiesInput;
