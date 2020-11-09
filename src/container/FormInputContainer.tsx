import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../components/FormInput';
import Input from '../components/Input';
import {
  deleteGeoLocation,
  insertGeoLocation,
  insertLocationName,
  selectGeoLocation
} from '../redux/geoLocationSlice';
import {
  insertError,
  insertLoading,
  selectLoading
} from '../redux/notificationSlice';
import { deleteWeather, insertWeather } from '../redux/weatherSlice';
import { getGeoLocationCoordinates } from '../services/externals/openCage';
import { useFetch } from '../services/api';

const FormInputContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const geoLocation = useSelector(selectGeoLocation);
  const isLoading = useSelector(selectLoading);

  const urlConfig = {
    url: geoLocation.latitude
      ? `onecall?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&units=metric&exclude=hourly,minutely,alerts&lang=pt_br&APPID=${process.env.openWeatherKey}`
      : null,
    baseURL: geoLocation.latitude ? process.env.openWeatherUrl : null
  };

  const { data: weatherData, isValidating } = useFetch(urlConfig);

  useEffect(() => {
    if (weatherData) {
      dispatch(
        insertWeather({
          today: weatherData?.current,
          tomorrow: weatherData?.daily?.[1],
          afterTomorrow: weatherData?.daily?.[2]
        })
      );
    }
  }, [weatherData, dispatch]);

  const onSubmitForm = useCallback(
    async (event) => {
      try {
        dispatch(insertLoading(true));
        event.preventDefault();

        const { coordinates, locationName } = await getGeoLocationCoordinates({
          locationName: geoLocation.locationName
        });

        dispatch(
          insertGeoLocation({
            locationName,
            latitude: coordinates.lat,
            longitude: coordinates.lng
          })
        );

        dispatch(insertError(false));
      } catch {
        dispatch(insertError(true));
        dispatch(deleteWeather());
        dispatch(deleteGeoLocation());
      } finally {
        dispatch(insertLoading(false));
      }
    },
    [geoLocation.locationName, dispatch]
  );

  const onChangeInput = (event) =>
    dispatch(insertLocationName({ locationName: event.target.value }));

  return (
    <FormInput onSubmitForm={onSubmitForm} loading={isLoading || isValidating}>
      <Input
        placeholder="Digite a localização desejada"
        onChangeInput={onChangeInput}
        type="text"
        value={geoLocation.locationName}
      />
    </FormInput>
  );
};

export default FormInputContainer;
