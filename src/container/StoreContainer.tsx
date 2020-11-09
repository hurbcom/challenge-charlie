import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { getGeoLocation } from '../helpers/geoLocation';
import { insertGeoLocation } from '../redux/geoLocationSlice';
import { insertError, insertLoading } from '../redux/notificationSlice';
import { getGeoLocationName } from '../services/externals/openCage';

const Store: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { geoLocation, error } = getGeoLocation();

  const currentLocation = useMemo(() => {
    if (geoLocation && geoLocation?.coords && geoLocation?.coords?.latitude) {
      return {
        latitude: geoLocation?.coords?.latitude,
        longitude: geoLocation?.coords?.longitude
      };
    }

    return null;
  }, [geoLocation]);

  if (error) {
    dispatch(insertError(true));
  }

  useEffect(() => {
    dispatch(insertLoading(true));
    if (
      currentLocation &&
      currentLocation.latitude &&
      currentLocation.longitude
    ) {
      getGeoLocationName({
        lat: currentLocation.latitude,
        lng: currentLocation.longitude
      }).then(({ locationName }) =>
        dispatch(
          insertGeoLocation({
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            locationName
          })
        )
      );
    }

    dispatch(insertLoading(false));
    dispatch(insertError(false));
  }, [currentLocation, dispatch]);

  return <></>;
};

export default Store;
