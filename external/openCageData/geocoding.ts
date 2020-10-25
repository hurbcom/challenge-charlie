import { EMPTY } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { Api } from 'api/client';
import { retryBackoff } from 'lib/exponentialBackoff';
import { ForwardGeocodingPayload } from './types/forwardGeocoding';
import { CityStateCountry, ReverseGeocodingPayload } from './types/reverseGeocoding';
import { mountPlaceName } from 'utils/mountPlaceName';

export const openCageDataGeocodingExternal = {
  reverseGeocoding: ({ lat, long }: { lat: number; long: number }) => {
    if (!(lat || long)) return EMPTY;
    return Api.get<ReverseGeocodingPayload>(
      `/geocode/v1/json?q=${lat}+${long}&key=${process.env.NEXT_PUBLIC_OPEN_CAGE_KEY}`,
      {
        baseURL: process.env.NEXT_PUBLIC_OPEN_CAGE_DATA_URL,
      },
    ).pipe(
      retryBackoff({ initialInterval: 3000 }),
      map<AxiosResponse<ReverseGeocodingPayload>, CityStateCountry>(rawData => {
        const components = rawData?.data.results?.[0]?.components;
        const city = components?.city;
        const state = components?.state;
        const country = components?.country;
        return {
          city,
          state,
          country,
        };
      }),
    );
  },
  forwardGeocoding: ({ placeName }: { placeName: string }) => {
    if (!placeName) return EMPTY;

    return Api.get<ForwardGeocodingPayload>(
      `/geocode/v1/json?q=${placeName}&key=${process.env.NEXT_PUBLIC_OPEN_CAGE_KEY}`,
      {
        baseURL: process.env.NEXT_PUBLIC_OPEN_CAGE_DATA_URL,
        validateStatus: status => {
          return status < 500;
        },
      },
    ).pipe(
      retryBackoff({ initialInterval: 3000 }),
      map(payload => {
        if (payload.status >= 400) {
          return alert(`No location found for: "${placeName}"`);
        }
        const firstResult = payload?.data?.results?.[0];
        const geometry = firstResult?.geometry;

        const mountedPlaceName = mountPlaceName({
          city: firstResult?.components?.city,
          state: firstResult?.components?.state,
          country: firstResult?.components?.country,
        });

        return {
          coordinates: {
            lat: geometry?.lat,
            long: geometry?.lng,
          },
          placeName: mountedPlaceName,
        };
      }),
      tap(payload => {
        console.log('PAYLOAD', payload);
      }),
    );
  },
};
