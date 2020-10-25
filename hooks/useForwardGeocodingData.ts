import { useEffect, useState } from 'react';
import { GeocodingCoordinates } from 'external/openCageData/types/forwardGeocoding';
import { openCageDataGeocodingExternal } from 'external/openCageData/geocoding';

export const useForwardGeocodingData = ({ searchValue }: { searchValue: string }) => {
  const [geocodingCoordinates, setGeocodingCoordinates] = useState<GeocodingCoordinates>();
  const [foundPlaceName, setFoundPlaceName] = useState<string>();

  useEffect(() => {
    const subscription = openCageDataGeocodingExternal
      .forwardGeocoding({ placeName: searchValue })
      .subscribe(result => {
        if (!result) return;
        result?.coordinates && setGeocodingCoordinates(result?.coordinates);
        result?.placeName && setFoundPlaceName(result?.placeName);
      });

    return () => subscription.unsubscribe();
  }, [searchValue]);

  return {
    geocodingCoordinates,
    foundPlaceName,
  };
};
