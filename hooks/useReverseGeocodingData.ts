import { useEffect, useState } from 'react';
import { openCageDataGeocodingExternal } from 'external/openCageData/geocoding';
import { CityStateCountry } from 'external/openCageData/types/reverseGeocoding';
import { mountPlaceName } from 'utils/mountPlaceName';

export const useReverseGeocodingData = ({ lat, long }: { lat: number; long: number }): { placeName: string } => {
  const [cityStateCountry, setCityStateCountry] = useState<CityStateCountry>();

  useEffect(() => {
    const subscriptions = [
      openCageDataGeocodingExternal.reverseGeocoding({ lat, long }).subscribe(data => setCityStateCountry(data)),
    ];

    return () => subscriptions.map(s => s.unsubscribe());
  }, [lat, long]);

  const placeName = cityStateCountry
    ? mountPlaceName({
        city: cityStateCountry?.city,
        state: cityStateCountry?.state,
        country: cityStateCountry?.country,
      })
    : undefined;

  return { placeName };
};
