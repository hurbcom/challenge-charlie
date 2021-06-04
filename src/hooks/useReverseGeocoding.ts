import { useEffect, useState } from 'react';
import NominatimService from '../external/NominatimService';

interface IUseReverseGeocoding {
  lat: number | undefined;
  lon: number | undefined;
}

export const useReverseGeocoding = ({ lat, lon }: IUseReverseGeocoding) => {};
