import { useEffect, useState } from 'react';

import OpenCageGeocodingService from '../external/OpenCageGeocodingService';

interface IUseReverseGeocoding {
  lat: number | undefined;
  lon: number | undefined;
}

export const useReverseGeocoding = ({ lat, lon }: IUseReverseGeocoding) => {
  const [addressInfo, setAddressInfo] = useState({ city: '', state: '', country: '' });
  const [isLoading, setLoading] = useState<boolean>(false);

  const getLocationByLatLong = async () => {
    try {
      setLoading(true);
      const data = await new OpenCageGeocodingService().getLocationByLatLong({ lat, lon });
      setAddressInfo(data);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!lat || !lon) return;
    getLocationByLatLong();
  }, [lat, lon]);

  return { addressInfo, isLoading };
};
