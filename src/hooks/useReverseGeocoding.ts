import { useEffect, useState } from 'react';

import NominatimService from '../external/NominatimService';

interface IUseReverseGeocoding {
  lat: number | undefined;
  lon: number | undefined;
}

export const useReverseGeocoding = ({ lat, lon }: IUseReverseGeocoding) => {
  const [addressInfo, setAddressInfo] = useState({ city: '', state: '', country: '' });

  const getLocationByLatLong = async () => {
    const data = await new NominatimService().getLocationByLatLong({ lat, lon });
    setAddressInfo(data);
  };

  useEffect(() => {
    if (!lat || !lon) return;
    getLocationByLatLong();
  }, [lat, lon]);

  return { addressInfo };
};
