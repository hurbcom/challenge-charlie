import { useEffect, useState } from 'react';

import OpenCageGeocodingService from '../external/OpenCageGeocodingService';

interface IUseReverseGeocoding {
  lat: number | undefined;
  lon: number | undefined;
}

export const useReverseGeocoding = ({ lat, lon }: IUseReverseGeocoding) => {
  const [addressInfo, setAddressInfo] = useState({ city: '', state: '', country: '' });

  const getLocationByLatLong = async () => {
    const data = await new OpenCageGeocodingService().getLocationByLatLong({ lat, lon });
    setAddressInfo(data);
  };

  useEffect(() => {
    if (!lat || !lon) return;
    getLocationByLatLong();
  }, [lat, lon]);

  return { addressInfo };
};
